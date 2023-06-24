import { DisponibilidadAdminComponent } from './modules/Admin/components/disponibilidad-admin/disponibilidad-admin.component';
import { ServicioPorEstilistaAdminComponent } from './modules/Admin/components/servicio-por-estilista-admin/servicio-por-estilista-admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
<<<<<<< HEAD
import { CardComponent } from './card/card.component';
import { ContenidoCardUsuarioComponent } from './contenido-card-usuario/contenido-card-usuario.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ProximasCitasComponent } from './proximas-citas/proximas-citas.component';
import { UsuariosAdminComponent } from './usuarios-admin/usuarios-admin.component';
import {RouterModule, Routes} from "@angular/router";
import { RolesAdminComponent } from './roles-admin/roles-admin.component';
import {FormsModule} from "@angular/forms";
import { ModalAsignarServicioComponent } from './modal-asignar-servicio/modal-asignar-servicio.component';
import { ServiciosAdminComponent } from './servicios-admin/servicios-admin.component';

//router
const appRoutes: Routes=[
  //ruta a usuarios
  //en component se pone el nombre del component tal y como aparace abajo en declarations
  {path:'admin/usuarios', component:UsuariosAdminComponent},
  //ruta a roles
  {path:'admin/roles', component:RolesAdminComponent},
  //ruta a servicios
  {path:'admin/servicios', component: ServiciosAdminComponent}
]
=======
import { CardComponent } from './modules/Admin/components';
import { ContenidoCardUsuarioComponent } from './modules/Admin/components';
import { HeaderAdminComponent } from './modules/Admin/components';
import { UsuariosAdminComponent } from './modules/Admin/components';
import { RolesAdminComponent } from './modules/Admin/components';
//check box
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ContenidoCardRolComponent } from './modules/Admin/components/contenido-card-rol/contenido-card-rol.component';
import { ServiciosAdminComponent } from './modules/Admin/components/servicios-admin/servicios-admin.component';
import { ContenidoCardServicioComponent } from './modules/Admin/components/contenido-card-servicio/contenido-card-servicio.component';
import { EstilistaAdminComponent } from './modules/Admin/components/estilista-admin/estilista-admin.component';
import { ContenidoCardEstilistaComponent } from './modules/Admin/components/contenido-card-estilista/contenido-card-estilista.component';
import { ClientesAdminComponent } from './modules/Admin/components/clientes-admin/clientes-admin.component';
import { ContenidoCardClientesComponent } from './modules/Admin/components/contenido-card-clientes/contenido-card-clientes.component';
import { TurnosAdminComponent } from './modules/Admin/components/turnos-admin/turnos-admin.component';
import { ContenidoCardTurnosComponent } from './modules/Admin/components/contenido-card-turnos/contenido-card-turnos.component';
import { CitasAdminComponent } from './modules/Admin/components/citas-admin/citas-admin.component';
import { ContenidoCardCitasComponent } from './modules/Admin/components/contenido-card-citas/contenido-card-citas.component';

import { NgChartsModule } from 'ng2-charts';


//librerias para los inputs

import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

  //librerias para el modal
import { MatDialogModule } from '@angular/material/dialog';
import { DialogCustomComponent } from './components/dialog-custom/dialog-custom.component';
import { DialogWithTemplateComponent } from './components/dialog-with-template/dialog-with-template.component';
import { ModalComponent } from './modal/modal.component';
import { RolComponent } from './modal/rol/rol.component';
import { ClientesComponent } from './modal/clientes/clientes.component';
import { EstilistaComponent } from './modal/estilista/estilista.component'
import {MenuLateralComponent} from "./modules/Admin/components/menu-lateral/menu-lateral.component";
<<<<<<< HEAD
import { ServiciosComponent } from './modal/servicios/servicios.component';
=======
import { BtnServicioPorEstilistaComponent } from './modules/Admin/components/btn-servicio-por-estilista/btn-servicio-por-estilista.component';
import { ContenidoServicioPorEstilistaComponent } from './modules/Admin/components/contenido-servicio-por-estilista/contenido-servicio-por-estilista.component';
import { ServicioPorEstilistaComponent } from './modal/servicio-por-estilista/servicio-por-estilista.component';
import { TurnosComponent } from './modal/turnos/turnos.component';
import { ContenidoCardDisponiblidadComponent } from './modules/Admin/components/contenido-card-disponiblidad/contenido-card-disponiblidad.component';
import { DisponibilidadesModalComponent } from './modal/disponibilidades-modal/disponibilidades-modal.component';
import { CitaModalComponent } from './modal/cita-modal/cita-modal.component';
>>>>>>> 97b3c39b5021e4eb1824deac80be7f2a838d5501



>>>>>>> 8d9abf80103fd453e0e2a29ed9ce1948c4cbd530

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContenidoCardUsuarioComponent,
    HeaderAdminComponent,
    UsuariosAdminComponent,
    RolesAdminComponent,
<<<<<<< HEAD
    ModalAsignarServicioComponent,
    ServiciosAdminComponent
=======
    ContenidoCardRolComponent,
    DialogCustomComponent,
    DialogWithTemplateComponent,
    ModalComponent,
    ContenidoCardRolComponent,
    ServiciosAdminComponent,
    EstilistaAdminComponent,
    ContenidoCardEstilistaComponent,
    ClientesAdminComponent,
    ContenidoCardClientesComponent,
    TurnosAdminComponent,
    ContenidoCardTurnosComponent,
    CitasAdminComponent,
    ContenidoCardCitasComponent,
    DialogCustomComponent,
    DialogWithTemplateComponent,
    ModalComponent,
    RolComponent,
    ContenidoCardServicioComponent,
    ClientesComponent,
    EstilistaComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ServiciosComponent,
=======
=======
    BtnServicioPorEstilistaComponent,
    ServicioPorEstilistaAdminComponent,
    ContenidoServicioPorEstilistaComponent,
    ServicioPorEstilistaComponent,
    TurnosComponent,
    DisponibilidadAdminComponent,
    ContenidoCardDisponiblidadComponent,
    DisponibilidadesModalComponent,
    CitaModalComponent,
    Grafica1Component,

>>>>>>> 97b3c39b5021e4eb1824deac80be7f2a838d5501

>>>>>>> 8d83b3d0efeb1b63d225e5c965ea0d0536ad48b3
>>>>>>> 8d9abf80103fd453e0e2a29ed9ce1948c4cbd530
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    //librerias para los formularios
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule,
    NgChartsModule,


    //librerias para los formularios
    MatInputModule,
    ReactiveFormsModule,

    //importacion para el modal
    MatDialogModule,
    MenuLateralComponent


  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
