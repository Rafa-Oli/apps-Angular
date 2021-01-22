import {Injectable} from "@angular/core";
import {Router} from '@angular/router'

import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase';

@Injectable()
export class Autenticacao{
    
    public token_id: string
    constructor(private router: Router){

    }

    public cadastrarUsuario(usuario: Usuario): Promise<any>{

      return  firebase.default.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((resposta: any) =>{

            //remover a senha do atributo senha do obj usuario
            delete usuario.senha
            
            //registrando dados complementares do usuario no path email na base64
            firebase.default.database().ref(`usuario_detalhe/${btoa(usuario.email)}`).push(usuario)
        
        }).catch((error) =>{
            console.log(error)
        });
        
    }


    public autenticar(email: string, senha: string): void{
        firebase.default.auth().signInWithEmailAndPassword(email,senha)
        .then((resposta: any) => {
            firebase.default.auth().currentUser.getIdToken()
            .then((idToken: string) => {
                this.token_id = idToken
                localStorage.setItem('idToken', idToken)
                this.router.navigate(['/home'])
            })
        }
        
        )
        .catch((error: Error) => console.log(error))
    }

    public autenticado(): boolean{
        if(this.token_id === undefined && localStorage.getItem('idToken') != null){ //faz a verificação se o token esta vazio
            this.token_id = localStorage.getItem('idToken')

        }
        if (this.token_id === undefined){
            this.router.navigate(['/'])
        }
        return this.token_id != undefined
    }

    public sair(): void{
        
        firebase.default.auth().signOut()
        .then(() => {
            localStorage.removeItem('idToken')
            this.token_id= undefined
            this.router.navigate(['/'])

        })
    }
}