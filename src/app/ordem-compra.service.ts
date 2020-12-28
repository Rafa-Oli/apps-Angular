import { Pedido } from "./shared/pedido.model";
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import {URL_API} from './app.api';



@Injectable()
export class OrdemCompraService{

    
    constructor(private http: HttpClient){ }

    public efetivarCompra(pedido: Pedido): Observable<any>{
  //content-type : é importante para saber oq tem no conteudo do request
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: headers
        }


        return this.http.post(
          `${URL_API}/pedidos`,
          JSON.stringify(pedido),
         options
        )
        .map(response => response)
    }
}