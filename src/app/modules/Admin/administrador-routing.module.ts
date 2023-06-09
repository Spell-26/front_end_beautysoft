import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministradorComponent} from "./administrador.component";
import {ClientesAdminComponent, UsuariosAdminComponent} from "./components";
import {RolesAdminComponent} from "./components";
import {ServiciosAdminComponent} from "./components";
import {EstilistaAdminComponent} from "./components";
import {TurnosAdminComponent} from "./components";
import {CitasAdminComponent} from "./components";
import { LoginComponent } from './login/login.component';
import { ServicioPorEstilistaAdminComponent } from './components/servicio-por-estilista-admin/servicio-por-estilista-admin.component';
import { DisponibilidadAdminComponent } from './components/disponibilidad-admin/disponibilidad-admin.component';
import {AdminClientesComponent} from "./components/admin-clientes/admin-clientes.component";
import { Grafica1Component } from './components/grafica1/grafica1.component';


//router
const routes: Routes=[
  {path:'', component: AdministradorComponent},
  //ruta a usuarios
  {path: 'login', component: LoginComponent},
  //en component se pone el nombre del component tal y como aparace abajo en declarations

  ///ruta de dashboard
  {path: 'dashboard', component: Grafica1Component },

  {path:'usuarios', component:UsuariosAdminComponent},
  //ruta a roles
  {path:'roles', component:RolesAdminComponent},
  //ruta a servicios
  {path:'servicios', component: ServiciosAdminComponent},
  //Ruta a Estilista
  {path:'estilista', component:EstilistaAdminComponent},
  //Ruta a Clientes
  {path:'clientes', component:AdminClientesComponent},
  //Ruta a turnos
  {path:'turnos', component:TurnosAdminComponent},
  //Ruta a citas
  {path:'citas', component:CitasAdminComponent},

  //Ruta servicios por estilista
  {path:'servicioPorEstilista', component:ServicioPorEstilistaAdminComponent},

  //Ruta a disponibilidad
  {path: 'disponibilidad', component: DisponibilidadAdminComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule{ }


