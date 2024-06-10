import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts!: Contact[];

  constructor() {

    const contactsLocalStorageString: string | null = localStorage.getItem('contacts');

    if (contactsLocalStorageString != null) {
      console.log("Tem que cair aqui")
      this.contacts = JSON.parse(contactsLocalStorageString)
    }
    else {
      this.contacts = [{
        id: 1,
        name: "tales",
        Telefone: "9122178999"
      }]
    }

  }

  getContacts() {
    return this.contacts
  }

}
