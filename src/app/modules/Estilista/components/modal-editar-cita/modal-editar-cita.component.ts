import { Component } from '@angular/core';
import {ModalEditarCitaService} from "../../../../service/estilistaServices/citas/modal-editar-cita.service";
import {CitasService} from "../../../../service/estilistaServices/citas/citas.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modal-editar-cita',
  templateUrl: './modal-editar-cita.component.html',
  styleUrls: ['./modal-editar-cita.component.css']
})
export class ModalEditarCitaComponent {

  formulario: FormGroup;

  constructor(private modalEditarService: ModalEditarCitaService, private citaService: CitasService) {
    this.formulario = new FormGroup<any>({
      hora: new FormControl(''),
      fecha: new FormControl('')
    })
  }

  cita:any[] = [];
  index:number = 0;
  id_cita : number = 0
  ngOnInit():void{
    this.index = this.citaService.$index;
    this.cita = this.citaService.$cita;
    this.id_cita = this.citaService.$cita[this.index].id_cita;
  }

  closeModal(){
    this.modalEditarService.$modalEditarCita.emit(false);
  }
  actualizar(){
    this.actualizarCita(this.formulario);
    this.closeModal();
  }
  actualizarCita(formulario :FormGroup){
    const datos = {
      fecha: formulario.value.fecha,
      hora: formulario.value.hora,
      id_cita: this.id_cita
    }
    this.citaService.actualizarCita(datos).subscribe(
      response => {
        console.log('Respuesta:', response);
      },
      error => {
        console.error('Error:', error);
        // Maneja el error de la petición aquí
      }
    )
  }
}
