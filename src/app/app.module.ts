import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import {ContactService} from "./modelservice/contact.service";
import { ContactdettailComponent } from './contactdettail/contactdettail.component';
import {ContactdettailresolverService} from "./componentresolver/contactdettailresolver.service";
import { SpinnerComponent } from './spinner/spinner.component';
import {SpinnerinterceptorService} from "./interceptor/spinnerinterceptor.service";
import { LoginComponent } from './login/login.component';

const interceptor = new SpinnerinterceptorService();


const appRoutes: Routes = [
/*  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  { path: 'about',
    component: AboutComponent
  },

  { path: 'service',
    component: ServiceComponent
  },

  {
    path: 'client',
    component: ClientComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  { path: '',
    component: HomeComponent
  },

  { path: 'spinner',
    component: SpinnerComponent
  },

  { path: 'contactdettail/:id',
    component: ContactdettailComponent,
    resolve:{
      contact: ContactdettailresolverService
    }
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ClientComponent,
    ContactComponent,
    ContactdettailComponent,
    SpinnerComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ContactService,
    ContactdettailresolverService,
    {provide: SpinnerinterceptorService, useValue: interceptor},
    {
      provide: HTTP_INTERCEPTORS,
      useValue: interceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
