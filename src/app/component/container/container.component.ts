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

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, SeparatorComponent, ContactComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  alfabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = data;


  filterContactsWithLetter(letter: string): Contact[] {
    return this.contacts.filter(item => item.name.toLowerCase().startsWith(letter));
  }



}
