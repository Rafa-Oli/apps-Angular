import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = ''
  public numero: string =''
  public complemento: string = ''
  public formaPagamento: string =''

  //controle de validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean 
  public formaPagamentoValido:boolean 

  //estados primitivos dos campos(pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //controlar botão confirmar compra
  public formEstado: string ='disabled'
  constructor() { }

  ngOnInit(): void {
  }
  atualizaEndereco(endereco: string): void{
  this.endereco = endereco
  this.enderecoEstadoPrimitivo = false

  //se a string for maior que 3
  if(this.endereco.length){
    this.enderecoValido = true
  }else{
    this.enderecoValido = false
  }

  this.habilitaForm()
  }
  atualizaNumero(numero: string): void{
  this.numero= numero
    this.numeroEstadoPrimitivo = false

    if (this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.habilitaForm()
  }
  atualizaComplemento(complemento: string): void{
  this.complemento= complemento
    this.complementoEstadoPrimitivo = false
    if (this.complemento.length > 0) {
      this.complementoValido = true
    }
    this.habilitaForm()
  }
  atualizaFormaPagamento(formaPagamento: string): void{
  this.formaPagamento= formaPagamento
    this.formaPagamentoEstadoPrimitivo = false
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
    this.habilitaForm()
  }

  public habilitaForm(): void{
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true){
      this.formEstado = ''
    }else{
      this.formEstado ='disabled'
    }
    
  }
}