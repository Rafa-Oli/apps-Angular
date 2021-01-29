import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Bd} from '../../bd.service'
@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss']
})
export class PublicacoesComponent implements OnInit {

  public email: string;

  constructor(private bd: Bd) { }


  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged((user) =>{
      this.email = user.email

      this.atualizarTimeLine()
    })
  }

  public atualizarTimeLine(): void{
    this.bd.consultaPublicacoes(this.email)
  }

}
