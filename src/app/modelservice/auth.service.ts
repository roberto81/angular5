import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  userlogged:Boolean = false;

  constructor(private http: HttpClient) { }

  login(user:User): Observable<User>{
    return this.http.get<User>('http://localhost:4200/api/user/' + user.email);
  }

  userIsLogged():Boolean{
    return this.userlogged;
  }
}
