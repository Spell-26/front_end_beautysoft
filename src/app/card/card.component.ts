import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public ruta:string ="";
  protected  nombreSeccion:string = ""

  constructor(private router: Router) {
  };

  ngOnInit(){
    this.ruta = this.router.url;
    if(this.ruta == "/admin/roles"){
      this.nombreSeccion = "Roles";
    }
    else if(this.ruta == "/admin/usuarios"){
      this.nombreSeccion = "Usuarios";
    }
  };



}
