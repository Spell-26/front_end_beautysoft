import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../service/dialog.service';
import { DialogWithTemplateComponent } from '../components/dialog-with-template/dialog-with-template.component';
import { ModalNuevoUsuarioService } from '../service/adminServices/modal-nuevo-usuario.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  matDialogRef!: MatDialogRef<DialogWithTemplateComponent>;

  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
    confirmar: ['', Validators.required]
  });

  constructor(
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
    private modalNuevoUsuarioService: ModalNuevoUsuarioService
  ) {}

  openDialogCustom() {
    this.dialogService
      .openDialogCustom({
        title: 'Title 1',
        content: 'Content 1',
      })
      .afterClosed()
      .subscribe((res) => {
        console.log('Dialog Custom Close', res);
        this.formGroup.reset();
      });
  }

  openDialogWithTemplate(template: TemplateRef<any>) {
    this.matDialogRef = this.dialogService.openDialogWithTemplate({ template });
    this.matDialogRef.afterClosed().subscribe((res) => {
      console.log('Dialog with template Close', res);
      this.formGroup.reset();
    });
  }

  onSave() {
    if (this.formGroup.valid) {
      const nuevoUsuario = this.formGroup.value;
      this.modalNuevoUsuarioService.agregarUsuario(nuevoUsuario).subscribe(
        (response) => {
          console.log('Usuario agregado:', response);
          this.formGroup.reset();
          this.matDialogRef.close();
        },
        (error) => {
          console.error('Error al agregar el usuario:', error);
          // Manejar el error adecuadamente, por ejemplo, mostrar un mensaje de error.
        }
      );
    } else {
      // El formulario no es válido, puedes mostrar un mensaje de error o realizar alguna acción adicional.
      // Utilizar una biblioteca como MatSnackBar para mostrar un mensaje de error en un tiempo definido.
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
