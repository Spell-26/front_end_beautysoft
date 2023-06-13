import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogWithTamplateData } from 'src/app/models/dialog-with-tamplate-data.model';

@Component({
  selector: 'app-dialog-with-template',
  templateUrl: './dialog-with-template.component.html',
  styleUrls: ['./dialog-with-template.component.css']
})
export class DialogWithTemplateComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogWithTamplateData){}

}
