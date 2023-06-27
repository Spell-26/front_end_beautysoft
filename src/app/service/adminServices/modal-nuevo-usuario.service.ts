import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalNuevoUsuarioService {

  private apiUrl = '/api/usuarios';

  constructor(private http: HttpClient) { }

  agregarUsuario(nuevoUsuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoUsuario);
  }
}
