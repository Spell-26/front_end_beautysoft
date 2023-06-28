
import {Component, OnInit, TemplateRef} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogWithTemplateComponent } from 'src/app/components/dialog-with-template/dialog-with-template.component';
import { DialogService } from 'src/app/service/dialog.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ClienteService, clientes} from "../../../../service/cliente/cliente.service";

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido-card-clientes',
  templateUrl: './contenido-card-clientes.component.html',
  styleUrls: ['./contenido-card-clientes.component.css']
})
export class ContenidoCardClientesComponent implements OnInit{

  desplegados:any[]=[];

  //almacenar clientes provenientes del query
  clientes : clientes[] = [];
  //en el constructor incluyo el servicio que hace las peticiones al backend
  constructor(private dialogService:DialogService, private formBuilder: FormBuilder, private clienteService: ClienteService ,private router:Router ){}
  //Funcion de Angular, ejecuta la funcion antes de cargar el componente
  ngOnInit(): void {
    const id =
    this.listarCliente()
  }



  listarCliente(){
    this.clienteService.GetAllClientes().subscribe((clientes:{message:any[]})=>{
      this.clientes=clientes.message
      console.log(this.clientes);
    }
    )}

    eliminarCliente(id:string){
      this.clienteService.deleteCliente(id).subscribe(res=>{
        console.log('cliente eliminado')
        this.listarCliente();
      },
      error=>{
        console.log(error);
      })

    }

    //editar boton

    private matDialogRef !: MatDialogRef<DialogWithTemplateComponent>;


    formGroup: FormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    })

    modificar(id:string){
      const datos={
        email: this.formGroup.get('email')?.value.email
      }
      this.clienteService.updateCliente(id,datos)
    }


 openDialogCustom(){
   this.dialogService.openDialogCustom({
     title: ' ¿Estas seguro de eliminar este usuario?',
     content: 'Al eliminar este usuario su informacion será eliminda permanentemente ¿Deseas Continuar?',
   }).afterClosed().subscribe(res=> {
     console.log('Dialog Custom Close', res)
   this.formGroup.reset();
   });
 }

 openDialogWithTemplate(template: TemplateRef<any>){
   this.matDialogRef = this.dialogService.openDialogWithTemplate({
     template,})
     this.matDialogRef
   .afterClosed().subscribe(res => {
     console.log('Dialog with template Close', res)
     this.formGroup.reset();
   })
 }
 onSave() {
  if(this.formGroup.controls['email']){
    Swal.fire({
      icon: 'error',
      title:'Error en validaciones',
      text: 'El correo es requerido y debe ser válido.'
    })
  }else{

  }

}


  protected estado:boolean = true;
  protected textoEstado:string ="Activo";

  protected cambiarEstado():void{
    this.estado = !this.estado;

    if(this.estado){
      this.textoEstado = "Activo";
    }
    else{
      this.textoEstado = "Inactivo";
    }
  }

  protected editar_collapsed:boolean = true;
  protected ocultar_opciones:boolean = true;


  mostrarBurbuja(index:number):void {
    this.desplegados[index]=!this.desplegados[index];
  }
  mostrarOpciones():void{
    if (!this.editar_collapsed){
      try{
        setTimeout(() =>{
            this.ocultar_opciones = !this.ocultar_opciones;
          }, 800
        );
      }
      catch (e) {
        console.log(e);
      }
    }
    else{
      this.ocultar_opciones = !this.ocultar_opciones;
    }

  }
}
