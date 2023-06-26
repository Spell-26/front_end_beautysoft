import { Component } from '@angular/core';
import {CitasService} from "../../../../service/estilistaServices/citas/citas.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";


interface interfaceCita {
  apellido_cliente: string;
  apellido_estilista: string;
  correo_cliente: string;
  correo_estilista: string;
  descripcion_estado: string;
  duracion: string;
  fecha_disponibilidad: string;
  fecha_cita: string;
  hora_cita: string
  fin_disponiblidad: string;
  foto_cliente: string;
  foto_estilista:string;
  id_cita:number;
  id_cliente:number;
  id_estados:number;
  id_estilista:number;
  inicio_disponibilidad:string;
  nombre_cliente:string;
  nombre_estilista:string;
  servicios:any[];
  valor:any[];
};

@Component({
  selector: 'app-card-cita',
  templateUrl: './card-cita.component.html',
  styleUrls: ['./card-cita.component.css']
})
export class CardCitaComponent {

  //PETICION A SERVICIO CITAS
  protected citas:any[] = [];
  protected citasProcesadas: interfaceCita[] = [];

  constructor(private citasService : CitasService) {

  }

  ngOnInit():void{

    this.citasService.refreshNeeded.subscribe(() => {
      this.citasProcesadas = [];
      this.citas = [];
      this.obtenerCitas();
    });

    this.obtenerCitas();

  }
  //actualizar el estado de la cita
  actualizarEstado(idEstado:number, idCita:number) :void{
    const datos = {
      id_estado : idEstado,
      id_cita : idCita
    };
    this.citasService.actualizarEstadoCita(datos).subscribe(
      response => {
        console.log('Respuesta:', response);
      },
      error => {
        console.error('Error:', error);
        // Maneja el error de la petición aquí
      }
    )
  }

  //FIN PETICION A SERVICIO CITAS


  protected estado:boolean = true;
  protected textoEstado:string ="Activo";

  protected cambiarEstado():void{
    this.estado = !this.estado;

    if(this.estado){
      this.textoEstado = "Activo";
    }
    else{
      this.textoEstado = "Inactivo";
    }
  }

  protected editar_collapsed:boolean = true;
  protected ocultar_opciones:boolean = true;


  mostrarBurbuja():void {
    this.editar_collapsed = !this.editar_collapsed;
    this.mostrarOpciones();
  }
  mostrarOpciones():void{
    if (!this.editar_collapsed){
      try{
        setTimeout(() =>{
            this.ocultar_opciones = !this.ocultar_opciones;
          }, 800
        );
      }
      catch (e) {
        console.log(e);
      }
    }
    else{
      this.ocultar_opciones = !this.ocultar_opciones;
    }

  }

  private obtenerCitas(){
    this.citasService.getAllCitas().subscribe((cita : {count:Number, citas:any[]}) =>{
      this.citas = cita.citas;
      this.citas.forEach((cita:{
        apellido_cliente: string, apellido_estilista: string, correo_cliente: string,
        correo_estilista: string, descripcion_estado: string, duracion: string,
        fecha_disponibilidad: string, fecha_cita: string, hora_cita:string, fin_disponiblidad: string,
        foto_cliente: string, foto_estilista:string, id_cita:number,
        id_cliente:number, id_estados:number, id_estilista:number, inicio_disponibilidad:string,
        nombre_cliente:string, nombre_estilista:string, nombre_servicio:string, valor:number
      }) =>{
        const citaExiste = this.citasProcesadas.find( c => c.id_cita === cita.id_cita);
        if(citaExiste){
          citaExiste.servicios.push(cita.nombre_servicio);
          citaExiste.valor.push(cita.valor);
        }
        else{
          this.citasProcesadas.push({
            apellido_cliente: cita.apellido_cliente, apellido_estilista: cita.apellido_estilista, correo_cliente: cita.correo_cliente,
            correo_estilista: cita.correo_estilista, descripcion_estado: cita.descripcion_estado, duracion: cita.duracion,
            fecha_disponibilidad: cita.fecha_disponibilidad, fecha_cita: cita.fecha_cita, hora_cita: cita.hora_cita, fin_disponiblidad: cita.fin_disponiblidad,
            foto_cliente: cita.foto_cliente, foto_estilista: cita.foto_estilista, id_cita: cita.id_cita,
            id_cliente: cita.id_cliente, id_estados: cita.id_estados, id_estilista: cita.id_estilista, inicio_disponibilidad: cita.inicio_disponibilidad,
            nombre_cliente: cita.nombre_cliente, nombre_estilista: cita.nombre_estilista, servicios: [cita.nombre_servicio], valor: [cita.valor]
          });
        }
      });
      console.log(this.citasProcesadas);
    });
  }

}
