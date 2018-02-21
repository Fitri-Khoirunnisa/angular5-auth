import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrasiComponent } from './components/registrasi/registrasi.component';
import { FrontComponent } from './components/front/front.component';

import { routing } from './app.routing';
import { AlertComponent } from './_directives/alert/alert.component';
import { AuthGuard } from './_guards/auth.guard';

import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrasiComponent,
    FrontComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
