
import { ClienteService, clientes } from './../../service/cliente/cliente.service';
import { Component, TemplateRef } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  nombre: new FormControl('',[ Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
  apellido: new FormControl('',[ Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
    telefono:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    direccion:['',Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
    confirmar: ['', Validators.required]
  });

constructor(private dialogService: DialogService, private formBuilder: FormBuilder, private ClienteService: ClienteService, private router:Router) {}

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
  //Funcion de validación personalizada para comparar contraseñas


  // validarContraseña(){
  //   const contraseña= this.formGroup.get('contraseña')?.value;
  //   const confirmar =this.formGroup.get('confirmar')?.value;
  //   if(contraseña!==confirmar){
  //     this.formGroup.get('confirmar')?.setErrors({error:true})
  //   }else{
  //     this.formGroup.get('confirmar')?.setErrors(null);
  //   }
  // }

//Validaciones del formulario con sweetalert2
  onSave() {
    if (this.formGroup.controls['nombre'].invalid) {
        Swal.fire({
        icon: 'error',
        title:'Error en validaciones',
        text: 'El nombre es requerido y solo se permiten letras',

    })
    }else if(this.formGroup.controls['apellido'].invalid){
      Swal.fire({
        icon: 'error',
        title:'Error en validaciones',
        text: 'El apellido es requerido y solo se permiten letras'
      })
    }else if(this.formGroup.controls['telefono'].invalid){

      Swal.fire({
        icon: 'error',
        title:'Error en validaciones',
        text: 'El télefono es requerido y solo debe ser diez números. '
      })

    }else if(this.formGroup.controls['direccion'].invalid){
      Swal.fire({
        icon: 'error',
        title:'Error en validaciones',
        text: 'La dirección es requeridad.'
      })
    }else if(this.formGroup.controls['correo'].invalid){
      Swal.fire({
        icon: 'error',
        title:'Error en validaciones',
        text: 'El correo es requerido y debe ser válido.'
      })

    }else if(this.formGroup.controls['contraseña'].invalid){
      Swal.fire({
        icon: 'error',
        title:'Error en validaciones',
        text: 'La contraseña es requeridad.'
      })
    }else if(this.formGroup.controls['confirmar'].invalid){
      Swal.fire({
        icon: 'error',
        title:'Error en validaciones',
        text: 'El campo de confirmar contraseña es requerido.'
      })
    } else {
      const nuevoCliente = this.formGroup.value;
      this.ClienteService.addCliente(nuevoCliente).subscribe(
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
