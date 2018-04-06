import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {isBoolean} from "util";
import {AuthService} from "../modelservice/auth.service";

@Injectable()
export class LoginguardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.router.navigate(['/login']);
    return true;
  }

  constructor( private router: Router ) { }

}
