import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  nome: String = "undefined"
  telefone: String = "undefined"
  id!: string;
  constructor(private activatedRouter: ActivatedRoute,
    private contactServer: ContactsService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')!;
    this.contactServer.getContactsById(parseInt(this.id!)).subscribe(item => {
      this.nome = item.name;
      this.telefone = item.Telefone;
      console.log(item.name);
    });
  }


  deleteContact() {
    this.contactServer.deleteContacts(parseInt(this.id!)).subscribe(() => {
      alert("Contact delet");
      this.router.navigate(['/'])
    })
  }

  editContact() {
    this.dialog.open(FormComponent, { data: this.id })
  }



}
