import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogWithTemplateComponent } from 'src/app/components/dialog-with-template/dialog-with-template.component';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-servicio-por-estilista-modal',
  templateUrl: './servicio-por-estilista.component.html',
  styleUrls: ['./servicio-por-estilista.component.css']
})
export class ServicioPorEstilistaComponent {
  matDialogRef!: MatDialogRef<DialogWithTemplateComponent>;

  servicio: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    Gmail: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
    ConfirmContraseña: ['', Validators.required]
  });

  constructor(private dialogService: DialogService, private formBuilder: FormBuilder) {}

  openDialogCustom() {
    this.dialogService.openDialogCustom({
      title: 'Title 1',
      content: 'Content 1',
    }).afterClosed().subscribe(res => {
      console.log('Dialog Custom Close', res);
      this.servicio.reset();
    });
  }

  openDialogWithTemplate(template: TemplateRef<any>) {
    this.matDialogRef = this.dialogService.openDialogWithTemplate({ template });
    this.matDialogRef.afterClosed().subscribe(res => {
      console.log('Dialog with template Close', res);
      this.servicio.reset();
    });
  }


  onSave() {
    if (this.servicio.valid) {
      console.log(this.servicio.value);
      this.servicio.reset();
      this.matDialogRef.close();
    } else {
      // El formulario no es válido, puedes mostrar un mensaje de error o realizar alguna acción adicional.
      //utilizar libreria snackbar para mostrar un error en un tiempo definido
      // Swal.fire({
      //   icon: 'error',
      //   title:'Oops',
      //   text: 'Las validaciones se encuentran mal'
      // })
    }
  }

  estado = true;
  textoEstado = 'Activo';

  cambiarEstado(): void {
    this.estado = !this.estado;

    if (this.estado) {
      this.textoEstado = 'Activo';
    } else {
      this.textoEstado = 'Inactivo';
    }
  }

  editar_collapsed = true;
  ocultar_opciones = true;
}
