import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstilistaComponent } from './estilista.component';
import {EstilistaRoutingModule} from "./estilista-routing.module";



@NgModule({
  declarations: [
    EstilistaComponent
  ],
  imports: [
    CommonModule,
    EstilistaRoutingModule,
  ]
})
export class EstilistaModule { }
