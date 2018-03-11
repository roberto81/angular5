import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Contact } from "../model/contact";

@Injectable()
export class ContactService {

  constructor(private http: HttpClient ) {

  }

  getAllContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>("http://localhost:4200/api/contact");
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>('http://localhost:4200/api/contact/' + id);
  }

}
