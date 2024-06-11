import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';
import data from '../data.json';
import { Contact } from '../../model/Contact';
import { ContactsService } from '../../services/contacts.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatDialogContent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  dateReference = data;
  contactList!: Contact[];
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    private contactService: ContactsService
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
  ngOnInit(): void {
    this.contactService.getContacts().subscribe(listContacts => {
      this.contactList = listContacts;
    });
  }
  cancelButton(): void {
    this.dialogRef.close();
  }

  submitContact() {

    this.contactService.salvarContacts({
      id: 0,
      name: this.contactForm.get('nome')?.value,
      Telefone: this.contactForm.get('telefone')?.value
    }).subscribe(() => {
      this.dialogRef.close();
    })
  }




}
