import {EventEmitter, Injectable} from '@angular/core';
import {CitasService} from "./citas.service";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalEditarCitaService {



  constructor( private http: HttpClient, private citasService : CitasService ) {

  }

  $modalEditarCita = new EventEmitter<any>();


}
