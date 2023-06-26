import { Component } from '@angular/core';
import {ModalNuevaCitaService} from "../../../../service/estilistaServices/citas/modal-nueva-cita.service";

@Component({
  selector: 'app-modal-nueva-cita',
  templateUrl: './modal-nueva-cita.component.html',
  styleUrls: ['./modal-nueva-cita.component.css']
})
export class ModalNuevaCitaComponent {
  constructor(private modalService: ModalNuevaCitaService) {
  }
  ngOnInit(){

  }
  closeModal(){
    this.modalService.$modalNuevaCita.emit(false);
  }
}
