import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModalNuevaCitaService {

  constructor(private http: HttpClient) { }

  $modalNuevaCita = new EventEmitter<any>();

  getAllServicios(): Observable<any>{
    return this.http.get('/api/servicios');
  };
  //obtener todos los clientes
  getAllClientes(numeroDeResultados:number = 100) : Observable<any>{
    return this.http.get('/api/clientes', {
      params:{
        limit: numeroDeResultados.toString()
      }
    });
  };
  //fin obtener todos los clientes
  getAllDisponibilidades(): Observable<any>{
    return this.http.get('/api/estilista/disponibilidad')
  };
  //nueva cita
  nuevaCita(datos:any):Observable<any>{
    const url = 'api/estilista/citas/nueva-cita';
    //QUEDA PENDIENTE HACERLA REACTIVE
    return this.http.post(url, datos);
  }
  //nuevo servicio por cita
  nuevoServicioCita(datos:any) : Observable<any>{
    const url = 'api/estilista/servicio-cita/nuevo-servicio-por-cita';
    return this.http.post(url, datos);
  }
}
