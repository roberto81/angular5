import {EventEmitter, Injectable} from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SpinnerinterceptorService implements HttpInterceptor {

  showspinner: Subject<boolean>;

  loadingStack = 0;

  startLoading: EventEmitter<number> = new EventEmitter();
  doneLoading: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingHandler(++this.loadingStack);

    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
          this.loadingHandler(--this.loadingStack);

      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.loadingHandler(--this.loadingStack);
      }
    });
  }

  loadingHandler(loadingStack) {
    if (loadingStack === 1) {
      this.startLoading.emit(loadingStack);
    } else if (loadingStack <= 0) {
      this.loadingStack = 0;
      this.doneLoading.emit(loadingStack);
    }
  }


}
