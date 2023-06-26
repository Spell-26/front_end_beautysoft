import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor( private http: HttpClient) { }

  private _refreshNeeded = new Subject<void>()

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  getAllCitas(): Observable<any>{
    return this.http.get('/api/estilista/citas');
  }
  actualizarEstadoCita(datos:any){
    const url = 'api/estilista/citas/actualizar_estado';
    return this.http.put(url, datos).pipe(
      tap(() =>{
        this._refreshNeeded.next();
      })
    )
  }
}
