import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private readonly API = "http://localhost:3000/contacts"
  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.API)
  }

  getContactsById(id: number): Observable<Contact> {
    const url = `${this.API}/${id}`;
    return this.http.get<Contact>(url)
  }

  salvarContacts(newContact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.API, newContact);
  }

  deleteContacts(id: number): Observable<Contact> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Contact>(url);
  }

  updateContacts(id: string, newContact: Contact): Observable<Contact> {
    const url = `${this.API}/${id}`;
    return this.http.put<Contact>(url, newContact)
  }


}
