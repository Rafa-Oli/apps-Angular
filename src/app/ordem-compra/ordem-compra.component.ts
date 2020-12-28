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

  //controle de validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean 
  public formaPagamentoValido:boolean 

  constructor() { }

  ngOnInit(): void {
  }
  atualizaEndereco(endereco: string): void{
  this.endereco = endereco
  //se a string for maior que 3
  if(this.endereco.length){
    this.enderecoValido = true
  }else{
    this.enderecoValido = false
  }
  }
  atualizaNumero(numero: string): void{
  this.numero= numero
    if (this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
  }
  atualizaComplemento(complemento: string): void{
  this.complemento= complemento
    if (this.complemento.length > 0) {
      this.complementoValido = true
    }
  }
  atualizaFormaPagamento(formaPagamento: string): void{
  this.formaPagamento= formaPagamento
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
  }

}
