import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/service/dialog.service';
import { DialogWithTamplateData } from 'src/app/models/dialog-with-tamplate-data.model';
import { DialogWithTemplateComponent } from 'src/app/components/dialog-with-template/dialog-with-template.component';


@Component({
  selector: 'app-contenido-card-rol',
  templateUrl: './contenido-card-rol.component.html',
  styleUrls: ['./contenido-card-rol.component.css']
})
export class ContenidoCardRolComponent {


  private matDialogRef !: MatDialogRef<DialogWithTemplateComponent>;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    Gmail: new FormControl(),
    contraseña: new FormControl(),
    ConfirmContraseña: new FormControl()
  })

  constructor(private dialogService:DialogService, ){}

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
