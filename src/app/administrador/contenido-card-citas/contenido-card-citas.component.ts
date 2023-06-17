import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido-card-citas',
  templateUrl: './contenido-card-citas.component.html',
  styleUrls: ['./contenido-card-citas.component.css']
})
export class ContenidoCardCitasComponent {
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
}
