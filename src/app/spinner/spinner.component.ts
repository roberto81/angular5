import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {SpinnerinterceptorService} from "../interceptor/spinnerinterceptor.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isLoading = false;

  @ViewChild('spinnerloading') spinnerloading:ElementRef;

  constructor(private interceptor: SpinnerinterceptorService) {
    this.interceptor.startLoading.subscribe(cont => {
      this.isLoading = true
    });
    this.interceptor.doneLoading.subscribe(cont => {
      this.isLoading = false
    });

  }

  ngOnInit() {

  }



}
