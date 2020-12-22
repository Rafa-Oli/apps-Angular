import { Oferta } from './shared/oferta.model'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable()
export class OfertasService{

    constructor(private http: HttpClient){}


    public getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisição http

      
      return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
      .then((resposta: any) => resposta)
        //retornar um promise Oferta[]
    }
 
    public getOfertasPorCategorias(categoria: string) : Promise<Oferta[]>{
      return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
    }
}