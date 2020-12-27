import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../../ofertas.service'


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = ''

  constructor(private route: ActivatedRoute, private ofertasServices: OfertasService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: Params) => { // acessando parametros da rota pai
      this.ofertasServices.getComoUsarOfertaPorId(parametros.id)
        .then((resposta: any) => {
          this.ondeFica = resposta
        })

    })
  }

}
