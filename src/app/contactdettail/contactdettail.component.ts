import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../modelservice/contact.service";
import {Contact} from "../model/contact";

@Component({
  selector: 'app-contactdettail',
  templateUrl: './contactdettail.component.html',
  styleUrls: ['./contactdettail.component.css']
})
export class ContactdettailComponent implements OnInit {

  contact: Contact;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }
}
