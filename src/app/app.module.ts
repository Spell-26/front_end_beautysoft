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
import {CardComponent, HeaderAdminComponent} from './modules/Admin/components';
import { ContenidoCardUsuarioComponent } from './modules/Admin/components';

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

//librerias para el dropdown de header


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
import { BtnServicioPorEstilistaComponent } from './modules/Admin/components/btn-servicio-por-estilista/btn-servicio-por-estilista.component';
import { ContenidoServicioPorEstilistaComponent } from './modules/Admin/components/contenido-servicio-por-estilista/contenido-servicio-por-estilista.component';
import { ServicioPorEstilistaComponent } from './modal/servicio-por-estilista/servicio-por-estilista.component';
import { TurnosComponent } from './modal/turnos/turnos.component';
import { ContenidoCardDisponiblidadComponent } from './modules/Admin/components/contenido-card-disponiblidad/contenido-card-disponiblidad.component';
import { DisponibilidadesModalComponent } from './modal/disponibilidades-modal/disponibilidades-modal.component';
import { CitaModalComponent } from './modal/cita-modal/cita-modal.component';
import { ServiciosModalComponent } from './modal/servicios-modal/servicios-modal.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AdministradorModule} from "./modules";
import {AdminClientesComponent} from "./modules/Admin/components/admin-clientes/admin-clientes.component";




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContenidoCardUsuarioComponent,
    UsuariosAdminComponent,
    RolesAdminComponent,
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
    BtnServicioPorEstilistaComponent,
    ServicioPorEstilistaAdminComponent,
    ContenidoServicioPorEstilistaComponent,
    ServicioPorEstilistaComponent,
    TurnosComponent,
    DisponibilidadAdminComponent,
    ContenidoCardDisponiblidadComponent,
    DisponibilidadesModalComponent,
    CitaModalComponent,
    ServiciosModalComponent,
    HeaderAdminComponent,
    AdminClientesComponent



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


    //librerias para los formularios
    MatInputModule,
    ReactiveFormsModule,

    //importacion para el modal
    MatDialogModule,
    MenuLateralComponent,
    HttpClientModule,
    AdministradorModule


  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
