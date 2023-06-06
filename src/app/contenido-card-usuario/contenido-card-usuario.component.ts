import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido-card-usuario',
  templateUrl: './contenido-card-usuario.component.html',
  styleUrls: ['./contenido-card-usuario.component.css']
})
export class ContenidoCardUsuarioComponent {
  estado:boolean = true;
  textoEstado:string ="Activo";
  cambiarEstado():void{
    this.estado = !this.estado;

    if(this.estado){
      this.textoEstado = "Activo";
    }
    else{
      this.textoEstado = "Inactivo";
    }
  }
}
