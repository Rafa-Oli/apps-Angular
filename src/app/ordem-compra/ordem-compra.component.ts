import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = ''
  public numero: string
  public complemento: string = ''
  public formaPagamento: string =''

  constructor() { }

  ngOnInit(): void {
  }
  atualizaEndereco(endereco: string): void{
  this.endereco = endereco
  }
  atualizaNumero(numero: string): void{
  this.numero= numero
  }
  atualizaComplemento(complemento: string): void{
  this.complemento= complemento
  }
  atualizaFormaPagamento(formaPagamento: string): void{
  this.formaPagamento= formaPagamento
  }

}
