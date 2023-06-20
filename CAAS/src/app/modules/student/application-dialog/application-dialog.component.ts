import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.css']
})
export class ApplicationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ApplicationDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
