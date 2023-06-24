import {Component, OnInit, TemplateRef} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogWithTemplateComponent } from 'src/app/components/dialog-with-template/dialog-with-template.component';
import { DialogService } from 'src/app/service/dialog.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ClienteService} from "../../../../service/cliente/cliente.service";

@Component({
  selector: 'app-contenido-card-clientes',
  templateUrl: './contenido-card-clientes.component.html',
  styleUrls: ['./contenido-card-clientes.component.css']
})
export class ContenidoCardClientesComponent implements OnInit{

  //almacenar clientes provenientes del query
  clientes : any[] = [];
  constructor(private dialogService:DialogService, private formBuilder: FormBuilder, private clienteService: ClienteService  ){}

  ngOnInit(): void {
    this.clienteService.GetAllClientes().subscribe((cliente: {count:Number, clientes:any[]}) => {
      this.clientes = cliente.clientes;
      console.log(this.clientes);
    });
  }


  //editar boton

 private matDialogRef !: MatDialogRef<DialogWithTemplateComponent>;


 formGroup: FormGroup = this.formBuilder.group({
  Gmail:['',Validators.email]

 })



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

 onSave(){
   console.log(this.formGroup.value);
   this.formGroup.reset()
   this.matDialogRef.close()
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


  mostrarBurbuja():void {
    this.editar_collapsed = !this.editar_collapsed;
    this.mostrarOpciones();
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
