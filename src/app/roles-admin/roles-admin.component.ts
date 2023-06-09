import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-roles-admin',
  templateUrl: './roles-admin.component.html',
  styleUrls: ['./roles-admin.component.css']
})
export class RolesAdminComponent {
  public ruta:string ="";

  constructor(private router: Router) {
  }

  ngOnInit(){
    this.ruta = this.router.url;
  }
}
