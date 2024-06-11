import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ContactComponent } from '../contact/contact.component';



import { FormsModule } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../model/Contact';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, SeparatorComponent, ContactComponent, FormsModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {

  alfabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = [];
  filterText: string = '';


  constructor(private contactServico: ContactsService) {
  }

  ngOnInit() {
    this.contactServico.getContacts().subscribe(listContacts => {
      this.contacts = listContacts;
    });
  }

  filterContactsWithLetter(letter: string): Contact[] {
    return this.filterContactsWithText()
      .filter(item => item.name.toLowerCase().startsWith(letter));
  }

  filterContactsWithText(): Contact[] {
    if (!this.filterText) return this.contacts;
    return this.contacts.filter(item => item.name.toLowerCase().includes(this.filterText.toLowerCase()))
  }

  filterAlfabet(): string {
    if (!this.filterText) return this.alfabet
    return this.filterText[0].toUpperCase()
  }





}
