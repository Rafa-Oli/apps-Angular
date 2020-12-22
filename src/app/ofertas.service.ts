import { Oferta } from './shared/oferta.model'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable()
export class OfertasService{
  private url_api = 'http://localhost:3000/ofertas'

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisição http
      return this.http.get(`${this.url_api}?destaque=true`)
        .toPromise()
      .then((resposta: any) => resposta)
        //retornar um promise Oferta[]
    }

    public getOfertasPorCategorias(categoria: string) : Promise<Oferta[]>{
      return this.http.get(`${this.url_api}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
    }
    
    public getOfertaPorId(id: number): Promise<Oferta>{
      return this.http.get(`${this.url_api}?id=${id}`)
        .toPromise()
        .then((resposta: any) =>{
          return resposta[0]
        } )
    }
}