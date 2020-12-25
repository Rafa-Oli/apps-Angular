import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {OfertasService} from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';

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
      .debounceTime(1000)  // executa a ação do switchMap após 1 segundo
      .switchMap((termo: string) =>{
        console.log(termo)
        if(termo.trim() === ''){
          //retornar um observable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }
        return this.ofertasService.pesquisaOfertas(termo)
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
  }


  public pesquisa(termoDaBusca: string): void{
   this.subjectPesquisa.next(termoDaBusca)
  }
}
