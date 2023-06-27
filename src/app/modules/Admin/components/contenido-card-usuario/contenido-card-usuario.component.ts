import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/service/dialog.service';
import { DialogWithTemplateComponent } from 'src/app/components/dialog-with-template/dialog-with-template.component';
import { UsuariosService } from 'src/app/service/adminServices/usuarios.service';
import { ModalEditarUsuarioService } from 'src/app/service/adminServices/modal-editar-usuario.service';


@Component({
  selector: 'app-contenido-card-usuario',
  templateUrl: './contenido-card-usuario.component.html',
  styleUrls: ['./contenido-card-usuario.component.css']
})
export class ContenidoCardUsuarioComponent {


  private matDialogRef !: MatDialogRef<DialogWithTemplateComponent>;


  formGroup: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private dialogService: DialogService, private formBuilder: FormBuilder, private UsuarioServicio: UsuariosService,modalEditarUsuarioService: ModalEditarUsuarioService) {}


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
        //usuarios

    usuarios: any [] = [];

 ngOnInit():void{
  this.UsuarioServicio.getAllUsuarios().subscribe((usuario:{count: number,usuarios: any[] })=>{
    this.usuarios = usuario.usuarios
    console.log(this.usuarios)
  })
 }

}
