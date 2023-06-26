import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import {AdministradorRoutingModule} from "./administrador-routing.module";
import {MenuLateralComponent, ProximasCitasComponent} from "./components";
import { LoginComponent } from './login/login.component';
import { Grafica1Component } from './components/grafica1/grafica1.component';




@NgModule({
  declarations: [
    AdministradorComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MenuLateralComponent,
    ProximasCitasComponent,
    Grafica1Component

  ]
})
export class AdministradorModule { }
