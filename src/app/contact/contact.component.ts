import { Component, OnInit } from '@angular/core';
import {Contact} from "../model/contact";
import {ContactService} from "../modelservice/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getAllContact().subscribe(
      data => {

      this.contacts = data;
    }
    );
  }

}
