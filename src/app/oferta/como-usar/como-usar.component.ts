import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = ''

  constructor(private route: ActivatedRoute, private ofertasServices: OfertasService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: Params) => { // acessando parametros da rota pai
     this.ofertasServices.getComoUsarOfertaPorId(parametros.id)
        .then((resposta: any) => {
         this.comoUsar = resposta
        })

    })
  }

}
