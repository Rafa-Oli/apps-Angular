import { Oferta } from './shared/oferta.model'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class OfertasService{

    constructor(private http: HttpClient){}


    public getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisição http
      return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((resposta: any) => resposta.json())
        //retornar um promise Oferta[]
    }
 
}