import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCustomComponent } from '../components/dialog-custom/dialog-custom.component';
import { DialogCustomData } from '../models/dialog-custom-data.model';
import { DialogWithTamplateData } from '../models/dialog-with-tamplate-data.model';
import { DialogWithTemplateComponent } from '../components/dialog-with-template/dialog-with-template.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  openDialogCustom(data: DialogCustomData){
    return this.matDialog.open(DialogCustomComponent, {data})
  }

  openDialogWithTemplate( data: DialogWithTamplateData ){
    return this.matDialog.open(DialogWithTemplateComponent, {data})
  }
}
