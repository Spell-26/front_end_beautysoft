import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})

export class MenuLateralComponent {
  //listener del click realizado al menu lateral
  protected logoClick:boolean = false;
  //nos permite cambiar las clases del template
  protected ocultarMostrar:boolean = false;
  //Lus verde para redimensionar el contenedor y el logo
  protected redimesionar = false;

  //intercambia el valor del listener y tambien ejecuta la funcion de ocultar el contenido
  protected expandirContraerLogo():void {
    this.logoClick = !this.logoClick;
    this.cambiarOcultarMostrar()
  }
  //espera 1.1segundos para realizar la accion de desahabilitar los botones
  //esto se hace porque la animacion del fadeOut dura 1 segundo
  private cambiarOcultarMostrar():void {
    try{
      setTimeout(() =>{
          this.ocultarMostrar = !this.ocultarMostrar;
        }, 1100
      );
    }
    catch (e) {
      console.log(e);
    }
    finally {
      this.redimesionar = !this.redimesionar;
    }
 }
}
