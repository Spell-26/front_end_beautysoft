import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EstilistaComponent} from "./estilista.component";
import {CitasEstilistaComponent} from "./components";


//router
const routes: Routes=[
  {path:'', component: EstilistaComponent},
  {path:'citas', component: CitasEstilistaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstilistaRoutingModule{ }


