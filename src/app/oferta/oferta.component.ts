import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {OfertasService} from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  public oferta: Oferta;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {}

  ngOnInit(): void {

    
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => this.oferta = oferta)


    
   /* utilizando o subscribe 
   Observable
  this.route.params.subscribe((parametro : any) =>{
    console.log(parametro.id)
  })
  */

  let tempo= interval(2000)
 //instrucao
  tempo.subscribe((intervalo: number) => {
    console.log(intervalo)
  }) 


  }

}
