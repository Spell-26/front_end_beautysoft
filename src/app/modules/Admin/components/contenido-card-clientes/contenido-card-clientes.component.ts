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
  //en el constructor incluyo el servicio que hace las peticiones al backend
  constructor(private dialogService:DialogService, private formBuilder: FormBuilder, private clienteService: ClienteService  ){}
  //Funcion de Angular, ejecuta la funcion antes de cargar el componente
  ngOnInit(): void {
    //Funcion del servicio que importamos en el constructor
    //nos trae todos los registros de clientes
    //cliente: {count:Number,  clientes:anu[]} es para hacer una desnormalizacion del json que nos manda el backend
    //Y hacer mas sencillo el recorrido
    //.subscribe es parte de la pedicion no le presten atencion pero se debe incluir
    this.clienteService.GetAllClientes().subscribe((cliente: {count:Number, clientes:any[]}) => {
      //almaceno la respuesta en el array que tenia preparado desde antes
      //Guardo lo unico que me interesa de la desnormalizacion
      //Aunque tambien puedo guardar el count si quiero saber cuantos registros trajo la consulta
      //ejemplo: this.numeroResultados = cliente.count;
      this.clientes = cliente.clientes;
      console.log(this.clientes);
    });
  }


  //editar boton

 private matDialogRef !: MatDialogRef<DialogWithTemplateComponent>;


 formGroup: FormGroup = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],

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
 onSave() {
  if (this.formGroup.valid) {
    console.log(this.formGroup.value);
    this.formGroup.reset();
    this.matDialogRef.close();
  } else {
    // El formulario no es válido, puedes mostrar un mensaje de error o realizar alguna acción adicional.
    //utilizar libreria snackbar para mostrar un error en un tiempo definido
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
