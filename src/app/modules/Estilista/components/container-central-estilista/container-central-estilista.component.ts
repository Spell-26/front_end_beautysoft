import { Component } from '@angular/core';
import {ModalNuevaCitaService} from "../../../../service/estilistaServices/citas/modal-nueva-cita.service";

@Component({
  selector: 'app-container-central-estilista',
  templateUrl: './container-central-estilista.component.html',
  styleUrls: ['./container-central-estilista.component.css']
})
export class ContainerCentralEstilistaComponent {

  modalState:boolean = true;

  constructor( private modalService: ModalNuevaCitaService) {
  }

  ngOnInit(){
    this.modalService.$modalNuevaCita.subscribe((value) => {
      this.modalState = value
    });
  }
  abrirModal(){
    this.modalState = true
  }
}
