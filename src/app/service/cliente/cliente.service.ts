import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //incluyo el modulo para hacer peticiones http
  constructor(private http: HttpClient) { }

  //obtener todos los clientes en la bd
  //el argumento (numeroDeResultados:number = 6) es un parametro que declare en el backend como endpoint
  //el observable es el tipo de dato que devuelve el backend
  GetAllClientes(numeroDeResultados:number = 6) : Observable<any>{
    return this.http.get('/api/clientes', {
      //este params es el que va a recibir el 6 que estoy pasando como parametro
      //y lo manda como header
      //asi => http://localhost:3000/api/clientes?limit=6
      //el toString es porque el header solo recibe formato texto yo le estoy pasando un numero, debo convertirlo.
      params:{
        limit: numeroDeResultados.toString()
      }
    });
  }
}
