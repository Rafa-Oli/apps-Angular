import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import * as firebase from 'firebase';
import { Progresso } from 'src/app/progresso.service';
import { Bd } from '../../bd.service'

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.scss']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string
  private imagem: any

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  constructor(
    private bd: Bd,
    private progresso: Progresso
  ) { }

  ngOnInit(): void {
   firebase.default.auth().onAuthStateChanged((user) => {
      this.email = user.email
   })
  }
  
  public publicar(): void{
   this.bd.publicar({
     email: this.email,
     titulo: this.formulario.value.titulo,
     imagem: this.imagem[0]
   })
   console.log(this.progresso.status)
   console.log(this.progresso.estado)
  }

  public preparaImagemUpload(event: Event): void{
   this.imagem = (<HTMLInputElement>event.target).files
  }
}
