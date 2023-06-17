import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//router
const routes: Routes=[
  {path:'', redirectTo: 'admin', pathMatch:'full'},
  {path:'admin', loadChildren: () => import('./modules').then(m => m.AdministradorModule)},
  {path:'estilista', loadChildren: () => import('./modules').then(m => m.EstilistaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


