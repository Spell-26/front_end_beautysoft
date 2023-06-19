import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogWithTemplateComponent } from 'src/app/components/dialog-with-template/dialog-with-template.component';
import { DialogService } from 'src/app/service/dialog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estilista',
  templateUrl: './estilista.component.html',
  styleUrls: ['./estilista.component.css']
})
export class EstilistaComponent {
  matDialogRef!: MatDialogRef<DialogWithTemplateComponent>;

  formGroup: FormGroup = this.formBuilder.group({
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
      this.formGroup.reset();
    });
  }

  openDialogWithTemplate(template: TemplateRef<any>) {
    this.matDialogRef = this.dialogService.openDialogWithTemplate({ template });
    this.matDialogRef.afterClosed().subscribe(res => {
      console.log('Dialog with template Close', res);
      this.formGroup.reset();
    });
  }


  onSave() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.formGroup.reset();
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
