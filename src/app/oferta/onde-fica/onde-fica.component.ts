import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
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
    const id = this.route.parent.snapshot.params['id'] // acessando parametros da rota pai
    this.ofertasServices.getOndeFicaOfertaPorId(id)
      .then((resposta: any) => {
        this.ondeFica = resposta
      })
  
  }

}