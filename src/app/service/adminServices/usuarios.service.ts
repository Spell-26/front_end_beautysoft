import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  private _refreshNeeded = new Subject<void>()

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  getAllUsuarios(): Observable<any>{
    return this.http.get('/api/usuarios');
  }







}
