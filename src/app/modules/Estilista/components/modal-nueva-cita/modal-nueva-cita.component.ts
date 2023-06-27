import { Component } from '@angular/core';
import {ModalNuevaCitaService} from "../../../../service/estilistaServices/citas/modal-nueva-cita.service";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-modal-nueva-cita',
  templateUrl: './modal-nueva-cita.component.html',
  styleUrls: ['./modal-nueva-cita.component.css']
})
export class ModalNuevaCitaComponent {

  formulario: FormGroup;
  servicios: any[] = [];
  clientes: any[] = [];
  disponibilidades: any[] = [];
  parteUnoModal:boolean = true;
  parteDosModal:boolean = false;
  parteTresModal:boolean = false;
  idCitaCreada:number = 0;

  constructor(private modalService: ModalNuevaCitaService) {
    this.formulario = new FormGroup<any>({
      servicio: new FormControl(''),
      hora: new FormControl(''),
      fecha: new FormControl(''),
      cliente: new FormControl(''),
      disponibilidad: new FormControl(''),
    })
  }
  ngOnInit(){
    this.modalService.getAllServicios().subscribe((servicio: {count:Number, servicios:any[]} ) =>{
      this.servicios = servicio.servicios;
      console.log(this.servicios);
    });
    this.modalService.getAllClientes().subscribe((cliente: {count:Number, clientes:any[]}) => {
      this.clientes = cliente.clientes;
      console.log(this.clientes);
    });
    this.modalService.getAllDisponibilidades().subscribe((disponibilidad: {count:Number, disponibilidades:any[]}) =>{
      this.disponibilidades = disponibilidad.disponibilidades;
      console.log(this.disponibilidades);
    })
  }
  closeModal(){
    this.modalService.$modalNuevaCita.emit(false);
  }

  onSubmit() {
    if (this.formulario.valid) {
      // Enviar los datos del formulario
      console.log(this.formulario.value);
    } else {
      // Mostrar errores de validación
      console.log('El formulario no es válido');
    }
  }
  goToParteDos(){
    this.parteUnoModal = false;
    this.parteDosModal = true;
  }
  goToParteTres(){
    this.parteDosModal = false;
    this.parteTresModal = true;
    this.onSubmit();
    this.nuevaCita(this.formulario);
  }
  finalizarCrearCita(){
    this.parteTresModal = false;
    this.nuevoServicioCita();
    this.closeModal();
  }

  //crear nueva cita
  nuevaCita(formulario: FormGroup){
    const datos = {
      fecha: formulario.value.fecha,
      hora: formulario.value.hora,
      cliente: formulario.value.cliente,
      estado: 1,
      disponibilidad: formulario.value.disponibilidad
    }
    this.modalService.nuevaCita(datos).subscribe(
      response => {
        console.log('Respuesta:', response);
        this.idCitaCreada = response.id_cita;
        console.log("id de la cita: ", this.idCitaCreada);
      },
      error => {
        console.error('Error:', error);
        // Maneja el error de la petición aquí
      }
    )
  }
  //crear servicio por cita
  nuevoServicioCita(){
    console.log("parametro id_cta", this.idCitaCreada);
    const datos = {
      //SE DEBE CAMBIAR LUEGO ESTA QUEMADO PORQUE AUN NO ESTA EL SERVICE DE SERVICIO POR ESTILISTA
      serv_estilista : 1,
      id_cita: this.idCitaCreada
    }
    this.modalService.nuevoServicioCita(datos).subscribe(
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
