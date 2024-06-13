import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  contactList!: Contact[];
  lastId!: number;
  idEdit!: string;
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    private contactService: ContactsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contactForm = new FormGroup({
      nome: new FormControl('tales', Validators.required),
      avatar: new FormControl('', Validators.required),
      telefone: new FormControl('999217899', Validators.required),
      email: new FormControl('tales@gmail.com', [Validators.required, Validators.email]),
      deteBird: new FormControl('2024-06-04'),
      socialMidia: new FormControl('https://olamundo.com'),
      obs: new FormControl('ola'),
    });
  }
  ngOnInit(): void {
    this.idEdit = this.data;
    console.log(this.idEdit); //Id bem por aqui
    this.contactService.getContacts().subscribe(listContacts => {
      this.contactList = listContacts;
    });
    if (this.idEdit) {
      this.contactService.getContactsById(parseInt(this.idEdit)).subscribe(item => {
        this.contactForm.patchValue({
          nome: item.name,
          telefone: item.Telefone
        })
      })
    }
  }
  cancelButton(): void {
    this.dialogRef.close();
  }

  submitContact() {
    this.lastId = this.contactList.length as number;
    this.contactService.salvarContacts({
      id: (this.lastId + 1).toString(),
      name: this.contactForm.get('nome')?.value,
      Telefone: this.contactForm.get('telefone')?.value,
      avatar: this.contactForm.get('avatar')?.value
    }).subscribe(() => {
      this.dialogRef.close();
      window.location.reload()
    })
  }

  putContact() {
    this.contactService.updateContacts(this.idEdit, {
      id: (this.lastId + 1).toString(),
      name: this.contactForm.get('nome')?.value,
      Telefone: this.contactForm.get('telefone')?.value,
      avatar: this.contactForm.get('avatar')?.value
    }).subscribe(() => {
      console.log("Dados alterados com sucesso");
      this.dialogRef.close()
    })
  }

  readFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.contactForm.get('avatar')?.setValue(reader.result)
        }
      }
      reader.readAsDataURL(file);
    }
  }


}
