import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import { ContenidoCardUsuarioComponent } from './contenido-card-usuario/contenido-card-usuario.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ProximasCitasComponent } from './proximas-citas/proximas-citas.component';
import { UsuariosAdminComponent } from './usuarios-admin/usuarios-admin.component';
import {RouterModule, Routes} from "@angular/router";
import { RolesAdminComponent } from './roles-admin/roles-admin.component';


import { ContenidoCardRolComponent } from './contenido-card-rol/contenido-card-rol.component';
import { ServiciosAdminComponent } from './servicios-admin/servicios-admin.component';
import { ContenidoCardServicioComponent } from './contenido-card-servicio/contenido-card-servicio.component';
import { EstilistaAdminComponent } from './estilista-admin/estilista-admin.component';
import { ContenidoCardEstilistaComponent } from './contenido-card-estilista/contenido-card-estilista.component';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { ContenidoCardClientesComponent } from './contenido-card-clientes/contenido-card-clientes.component';
import { TurnosAdminComponent } from './turnos-admin/turnos-admin.component';
import { ContenidoCardTurnosComponent } from './contenido-card-turnos/contenido-card-turnos.component';
import { CitasAdminComponent } from './citas-admin/citas-admin.component';
import { ContenidoCardCitasComponent } from './contenido-card-citas/contenido-card-citas.component';

//librerias para los inputs

import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

  //librerias para el modal
import { MatDialogModule } from '@angular/material/dialog';
import { DialogCustomComponent } from './components/dialog-custom/dialog-custom.component';
import { DialogWithTemplateComponent } from './components/dialog-with-template/dialog-with-template.component';
import { ModalComponent } from './modal/modal.component'










//router
const appRoutes: Routes=[
  //ruta a usuarios
  //en component se pone el nombre del component tal y como aparace abajo en declarations
  {path:'admin/usuarios', component:UsuariosAdminComponent},
  //ruta a roles
  {path:'admin/roles', component:RolesAdminComponent},

  //ruta a servicios
  {path:'admin/servicios', component: ServiciosAdminComponent},
  //Ruta a Estilista
  {path:'admin/estilista', component:EstilistaAdminComponent},
  //Ruta a Clientes
  {path:'admin/clientes', component:EstilistaAdminComponent},

  //Ruta a turnos
  {path:'admin/turnos', component:TurnosAdminComponent},
  //Ruta a citas
  {path:'admin/citas', component:CitasAdminComponent},
  {path:'admin/roles', component:RolesAdminComponent}






]

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    CardComponent,
    ContenidoCardUsuarioComponent,
    HeaderAdminComponent,
    ProximasCitasComponent,
    UsuariosAdminComponent,
    RolesAdminComponent,
    ContenidoCardRolComponent,
    DialogCustomComponent,
    DialogWithTemplateComponent,
    ModalComponent,
    ContenidoCardRolComponent,
    ServiciosAdminComponent,
    ContenidoCardServicioComponent,
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

    //librerias para los formularios
    MatInputModule,
    ReactiveFormsModule,

    //inicializar el router
    RouterModule.forRoot(appRoutes),

    //importacion para el modal
    MatDialogModule

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
