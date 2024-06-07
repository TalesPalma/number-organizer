import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';
import data from '../data.json';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatDialogContent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contactForm!: FormGroup;
  dateReference = data;
  constructor(
    public dialogRef: MatDialogRef<FormComponent>
  ) {
    this.contactForm = new FormGroup({
      nome: new FormControl('tales', Validators.required),
      telefone: new FormControl('999217899', Validators.required),
      email: new FormControl('tales@gmail.com', [Validators.required, Validators.email]),
      deteBird: new FormControl('2024-06-04'),
      socialMidia: new FormControl('https://olamundo.com'),
      obs: new FormControl('ola'),
    });
  }

  cancelButton(): void {
    this.dialogRef.close();
  }

  submitContact() {
    console.log(this.contactForm.value)
  }


}
