import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],

})
export class HeaderAdminComponent {
  showNotifications = false;

  constructor(private snackBar: MatSnackBar) {}

  openNotifications() {
    this.showNotifications = !this.showNotifications;

    // Opcional: Mostrar una notificación simple
    if (this.showNotifications) {
      this.snackBar.open('Tienes nuevas notificaciones', 'Cerrar', {
        duration: 3000, // Duración en milisegundos
      });
    }
  }

}
