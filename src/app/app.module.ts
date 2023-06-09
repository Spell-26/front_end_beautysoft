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
import {FormsModule} from "@angular/forms";

//router
const appRoutes: Routes=[
  //ruta a usuarios
  //en component se pone el nombre del component tal y como aparace abajo en declarations
  {path:'admin/usuarios', component:UsuariosAdminComponent},
  //ruta a roles
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
    RolesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    //inicializar el router
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
