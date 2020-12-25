import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {OfertasService} from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

 public ofertas: Observable<Oferta[]>
 private subjectPesquisa: Subject<string> = new Subject<string>(); //observador
 

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
   this.ofertas = this.subjectPesquisa // retorno Oferta[]
      .switchMap((termo: string) =>{
        console.log(termo)
        return this.ofertasService.pesquisaOfertas(termo)
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
  }


  public pesquisa(termoDaBusca: string): void{
   this.subjectPesquisa.next(termoDaBusca)
  }
}
