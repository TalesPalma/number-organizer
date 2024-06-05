import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ContactComponent } from '../contact/contact.component';


interface Contact {
  id: number,
  name: string,
  Telefone: string
}

import data from '../data.json'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, SeparatorComponent, ContactComponent, FormsModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  alfabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = data;
  filterText: string = '';

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
