import { Component, OnInit } from '@angular/core';
import {AuthService} from "../modelservice/auth.service";
import {User} from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User("robertopallotta@tiscalinet.it","roberto");

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login(){
    //this.authservice.login();
    console.log('premuto login!');
    if( this.loginService() ){
      this.authservice.userlogged = true;
    }else{
      this.authservice.userlogged = false;
    }
  }
  private loginService(): Boolean{
    let us:User;
    this.authservice.login(this.user).subscribe((user:User) =>{
      us=user;
    }, error =>{

    });
    if(us.email == "robertopallotta@tiscalinet.it"){
      return true;
    }
    return false;
  }
}
