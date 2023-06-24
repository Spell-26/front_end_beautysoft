import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent {
  constructor(private router:Router){

  }
  redirigir(){
    this.router.navigate(['admin/disponibilidad']);
  }
}
