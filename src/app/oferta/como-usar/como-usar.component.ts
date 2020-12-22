import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
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
  const id =  this.route.parent.snapshot.params['id'] // acessando parametros da rota pai
    this.ofertasServices.getComoUsarOfertaPorId(id)
    .then((resposta: any) => {
     this.comoUsar = resposta
    })
  }

}
