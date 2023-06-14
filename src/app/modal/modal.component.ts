import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../service/dialog.service';
import { DialogWithTemplateComponent } from '../components/dialog-with-template/dialog-with-template.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
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
      title: 'Title 1',
      content: 'Content 1',
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

  //boton de estado

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



}
