import { Injectable } from '@angular/core'
import * as firebase from 'firebase'
import {Progresso} from './progresso.service'

@Injectable()
export class Bd{
    constructor(private progresso: Progresso){

    }
    public publicar(publicacao: any): void{

        firebase.default.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo }).then((resposta: any) => {
               let nomeImagem = resposta.key


                firebase.default.storage().ref().child(`imagens/${nomeImagem}`)
                    .put(publicacao.imagem)
                    .on(firebase.default.storage.TaskEvent.STATE_CHANGED,
                        //acompanhamento do progresso do upload
                        (snapshot: any) => {
                            this.progresso.status = 'andamento'
                            this.progresso.estado = snapshot
                        },
                        (error) => {
                            this.progresso.status = 'erro'
                        },
                        () => {
                            //finalização do processo
                            this.progresso.status = 'concluido'
                        }
                    )
            } )

    }

    public consultaPublicacoes(emailUsuario: string): any{
          firebase.default.database().ref(`publicacoes/${btoa(emailUsuario)}`)
          .once('value')
          .then((snapshot: any) => { //retornando publicacao
              console.log(snapshot.val())
          })
    }
}