import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private readonly API = "http://localhost:3000/contacts"
  constructor(private http: HttpClient) {
  }

  getContacts() {
    return this.http.get<Contact[]>(this.API)
  }

  getContactsById(id: number) {
    return this.http.get<Contact>(this.API)
  }

  salvarContacts(newContact: Contact) {
    return this.http.post<Contact>(this.API, newContact);
  }

  deleteContacts() {

  }

  updateContacts() {
  }


}
