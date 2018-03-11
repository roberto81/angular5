import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('mySidenav') sidenav:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  closeNav(){
    this.sidenav.nativeElement.style.width= "0";
  }

  openNav(){
    this.sidenav.nativeElement.style.width = "250px";
  }
}
