import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Contact} from "../model/contact";
import {Observable} from "rxjs/Observable";
import {ContactService} from "../modelservice/contact.service";

@Injectable()
export class ContactdettailresolverService implements Resolve<Contact>{

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> | Promise<Contact> | Contact {

    let id = Number( route.paramMap.get('id') );
    return this.contactService.getContactById( id );

  }
}
