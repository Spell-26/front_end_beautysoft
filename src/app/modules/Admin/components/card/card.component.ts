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
  protected textoBoton:string="";

  constructor(private router: Router) {
  };

  ngOnInit(){
    this.ruta = this.router.url;
    if(this.ruta == "/admin/roles"){
      this.nombreSeccion = "Roles";
      this.ayuda ="En esta sección podrás visualizar información relevante de los roles registrados en BeautySoft, como los modulos a los que tienen acceso. Podrás crear roles nuevos o editar los ya existentes."
      this.textoBoton="Nuevo rol";
    }

    else if(this.ruta == "/admin/usuarios"){
      this.nombreSeccion = "Usuarios";
      this.ayuda ="En esta sección podrás visualizar información relevante de tus usuarios,como la fecha de su creación e información personal. Podrás crear usuarios nuevos o editar los ya existentes."
      this.textoBoton="Nuevo usuario";

    }else if(this.ruta=="/admin/servicios"){
      this.nombreSeccion="Servicios"
      this.ayuda="En esta sección podrás visualizar información relevante de tus servicios,como la duración, el valor, la descripción y el estado. Podrás crear servicios nuevos o editar los ya existentes."
      this.textoBoton="Nuevo servicio";

    } else if(this.ruta=="/admin/estilista"){
    this.nombreSeccion="Estilista"
    this.ayuda="En esta sección podrás visualizar información relevante de tus servicios,como la duración, el valor, la descripción y el estado. Podrás crear servicios nuevos o editar los ya existentes."
    this.textoBoton="Nuevo estilista";

    } else if(this.ruta=="/admin/clientes"){
    this.nombreSeccion="Clientes"
    this.ayuda="En esta sección podrás visualizar información relevante de los clientes,como el correo, el télefono, la dirección y el estado. Podrás crear clientes nuevos o editar los ya existentes."
    this.textoBoton="Nuevo cliente";

    }else if(this.ruta=="/admin/turnos"){
      this.nombreSeccion="Turnos"
      this.ayuda="En esta página podrás ver información actualizada sobre los turnos asignados a cada estilista, si deseas ver sus citas haz click sobre uno de ellos, también podrás administrar sus disponibilidades."
      this.textoBoton="Ver disponiblidades";
      }else if(this.ruta=="/admin/citas"){
        this.nombreSeccion="Citas"
        this.ayuda="En esta página podrás ver información actualizada sobre las citas  asignadas que tiene cada estilista."
        this.textoBoton="Nueva cita";
      }else if(this.ruta=="/admin/servicioPorEstilista"){
        this.nombreSeccion="Servicio por estilista"
        this.ayuda="En esta página podras asignarle un servicio a un estilista, si deseas ver sus citas haz click sobre uno de ellos, también podrás administrar sus disponibilidades."
        this.textoBoton="Ver disponiblidades";
  }else if(this.ruta=="/admin/disponibilidad"){
    this.nombreSeccion="Disponibilidades"
    this.ayuda="Aquí podrás ver las desponibilidades a lo largo del dia de tus estilistar, podrás gestionarlas tanto individual como grupalmente, añadiendo bloques a varios estlistas ya sea diario o semanalmente"
    // this.textoBoton="Ver disponiblidades";

  }
}
}
