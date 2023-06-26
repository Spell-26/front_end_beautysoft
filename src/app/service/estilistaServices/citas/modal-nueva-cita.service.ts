import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalNuevaCitaService {

  constructor() { }

  $modalNuevaCita = new EventEmitter<any>();
}
