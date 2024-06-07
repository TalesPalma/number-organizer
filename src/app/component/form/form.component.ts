import { Component } from '@angular/core';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(
    public dialogRef: MatDialogRef<FormComponent>
  ) { }

  cancelButton(): void {
    this.dialogRef.close();
  }


}
