import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-servicio-por-estilista',
  templateUrl: './btn-servicio-por-estilista.component.html',
  styleUrls: ['./btn-servicio-por-estilista.component.css']
})
export class BtnServicioPorEstilistaComponent {

  constructor(private router:Router){

  }

  redirigir(){
    this.router.navigate(['admin/servicioPorEstilista']);
  }
}
