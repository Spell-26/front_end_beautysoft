import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  //obtener todos los clientes en la bd
  GetAllClientes(numeroDeResultados:number = 6) : Observable<any>{
    return this.http.get('/api/clientes', {
      params:{
        limit: numeroDeResultados.toString()
      }
    });

    /*
     return this.http.get('http://localhost:3000/api/clientes', {
      params:{
        limit: numeroDeResultados.toString()
      }
    });*/
  }
}
