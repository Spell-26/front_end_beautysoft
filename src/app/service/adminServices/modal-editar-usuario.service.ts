import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalEditarUsuarioService {

  private apiUrl = '/api/usuarios';

  constructor(private http: HttpClient) { }

  editarUsuario(id: number, usuario: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, usuario);
  }
}
