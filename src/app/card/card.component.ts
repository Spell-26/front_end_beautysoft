import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public ruta:string ="";
  protected ayuda:string="";
  protected  nombreSeccion:string = ""

  constructor(private router: Router) {
  };

  ngOnInit(){
    this.ruta = this.router.url;
    if(this.ruta == "/admin/roles"){
      this.nombreSeccion = "Roles";
      this.ayuda ="En esta sección podrás visualizar información relevante de los roles registrados en BeautySoft, como los modulos a los que tienen acceso. Podrás crear roles nuevos o editar los ya existentes."
    }
    else if(this.ruta == "/admin/usuarios"){
      this.nombreSeccion = "Usuarios";
      this.ayuda ="En esta sección podrás visualizar información relevante de tus usuarios,como la fecha de su creación e información personal. Podrás crear usuarios nuevos o editar los ya existentes."
    }
  };

}
