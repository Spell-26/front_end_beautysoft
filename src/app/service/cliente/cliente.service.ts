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

   //obtener todos los clientes en la bd
  GetAllClientes() : Observable<any>{
    return this.http.get('/api/clientes')
  }
//Obtener un cliente
  getOneCliente(id:string): Observable<any>{
    return this.http.get('/api/clientes' + '/' + id);
  }
//Adiconar cliente
  addCliente(cliente:any) : Observable<any>{
    return this.http.get('/api/clientes', cliente);

  }
  //Eliminar cliente
  deleteCliente(id:string): Observable<any>{
    return this.http.delete('/api/clientes' + '/' + id);
  }

  //Actualizar cliente
  updateCliente(id:string, cliente: clientes) : Observable<any>{
    return this.http.put('/api/clientes' + '/' + id, cliente);
  }

}

export interface clientes{
  id_cliente:string;
  nombre:string;
  apellido:string;
  nombre_rol:string;
  correo_cliente: string;
  telefono: string;
  direccion: string
}
