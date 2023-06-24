import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCustomData } from 'src/app/models/dialog-custom-data.model';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrls: ['./dialog-custom.component.css']
})
export class DialogCustomComponent {
  constructor(@Inject(MAT_DIALOG_DATA)public data: DialogCustomData){}

}
