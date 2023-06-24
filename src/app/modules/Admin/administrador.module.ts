import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import {AdministradorRoutingModule} from "./administrador-routing.module";
import {MenuLateralComponent, ProximasCitasComponent} from "./components";
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AdministradorComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MenuLateralComponent,
    ProximasCitasComponent

  ]
})
export class AdministradorModule { }
