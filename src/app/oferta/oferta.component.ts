import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import {OfertasService} from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';
import {CarrinhoService} from '../carrinho.service'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  public oferta: Oferta;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService, private carrinhoService: CarrinhoService) {}

  
  ngOnInit(): void {
    //subscribe fica verificando que teve alteracoes na rota
  this.route.params.subscribe((parametros: Params) => {

    this.ofertasService.getOfertaPorId(parametros.id)  // envia para a promise um id atualizado
    .then((oferta: Oferta) => this.oferta = oferta)
  })
    
  }

 public adicionarItemCarrinho(): void{
  this.carrinhoService.incluirItem(this.oferta);
  }
  

}
