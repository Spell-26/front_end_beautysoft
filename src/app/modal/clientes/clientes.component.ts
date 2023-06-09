import { Component, TemplateRef } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogWithTemplateComponent } from 'src/app/components/dialog-with-template/dialog-with-template.component';
import { DialogService } from 'src/app/service/dialog.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  matDialogRef!: MatDialogRef<DialogWithTemplateComponent>;

  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    direccion:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
    confirmar: ['', Validators.required]
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
    if (this.formGroup.invalid) {
      Swal.fire({
        title:'error',
        text: 'Las validaciones se encuentran mal'
      })
      return
    } 
    console.log(this.formGroup.value);
    this.formGroup.reset();
    this.matDialogRef.close();

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
