import { Oferta } from './shared/oferta.model'
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { map, retry } from '../../node_modules/rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';



@Injectable()
export class OfertasService{
  //private url_api = 'http://localhost:3000/ofertas'

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisição http
      return this.http.get(`${URL_API}/ofertas?destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta)
        //retornar um promise Oferta[]
    }

    public getOfertasPorCategorias(categoria: string) : Promise<Oferta[]>{
      return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
    }
    
    public getOfertaPorId(id: number): Promise<Oferta>{
      return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) =>{
          return resposta[0]
        } )
    }

    public getComoUsarOfertaPorId(id: number): Promise<string>{
      return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao
      })
    }
  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao
      })
  }
 //utilizando _like traz resultados com aproximação 
  public pesquisaOfertas(termo: string): Observable<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`).retry(10).map((resposta: any) => resposta)

  
  }
}