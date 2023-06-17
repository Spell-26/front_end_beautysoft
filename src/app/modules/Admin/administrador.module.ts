import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import {AdministradorRoutingModule} from "./administrador-routing.module";
import {MenuLateralComponent, ProximasCitasComponent} from "./components";

@NgModule({
  declarations: [
    AdministradorComponent,


  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MenuLateralComponent,
    ProximasCitasComponent,

  ]
})
export class AdministradorModule { }
