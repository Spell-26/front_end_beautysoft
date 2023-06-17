import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './administrador/menu-lateral/menu-lateral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './administrador/card/card.component';
import { ContenidoCardUsuarioComponent } from './administrador/contenido-card-usuario/contenido-card-usuario.component';
import { HeaderAdminComponent } from './administrador/header-admin/header-admin.component';
import { ProximasCitasComponent } from './administrador/proximas-citas/proximas-citas.component';
import { UsuariosAdminComponent } from './administrador/usuarios-admin/usuarios-admin.component';
import {RouterModule, Routes} from "@angular/router";
import { RolesAdminComponent } from './administrador/roles-admin/roles-admin.component';

//check box
import { MatCheckboxModule } from '@angular/material/checkbox'



import { ContenidoCardRolComponent } from './administrador/contenido-card-rol/contenido-card-rol.component';
import { ServiciosAdminComponent } from './administrador/servicios-admin/servicios-admin.component';
import { ContenidoCardServicioComponent } from './administrador/contenido-card-servicio/contenido-card-servicio.component';
import { EstilistaAdminComponent } from './administrador/estilista-admin/estilista-admin.component';
import { ContenidoCardEstilistaComponent } from './administrador/contenido-card-estilista/contenido-card-estilista.component';
import { ClientesAdminComponent } from './administrador/clientes-admin/clientes-admin.component';
import { ContenidoCardClientesComponent } from './administrador/contenido-card-clientes/contenido-card-clientes.component';
import { TurnosAdminComponent } from './administrador/turnos-admin/turnos-admin.component';
import { ContenidoCardTurnosComponent } from './administrador/contenido-card-turnos/contenido-card-turnos.component';
import { CitasAdminComponent } from './administrador/citas-admin/citas-admin.component';
import { ContenidoCardCitasComponent } from './administrador/contenido-card-citas/contenido-card-citas.component';

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
