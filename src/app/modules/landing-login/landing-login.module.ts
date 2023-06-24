import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLoginRoutingModule } from './landing-login-routing.module';
import { LoginComponent } from './login';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LandingLoginRoutingModule,
  ]
})
export class LandingLoginModule { }
