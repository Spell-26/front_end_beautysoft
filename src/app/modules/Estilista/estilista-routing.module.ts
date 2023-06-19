import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EstilistaComponent} from "./estilista.component";



//router
const routes: Routes=[
  {path:'', component: EstilistaComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstilistaRoutingModule{ }


