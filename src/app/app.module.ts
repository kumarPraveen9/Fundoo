import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import {MatCardModule} from '@angular/material/card';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { IconsnoteComponent } from './Components/iconsnote/iconsnote.component';
import { GetAllnotesComponent } from './Components/get-allnotes/get-allnotes.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    CreatenoteComponent,
    IconsnoteComponent,
    GetAllnotesComponent,
    DisplaynoteComponent,
   
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,MatToolbarModule,
    MatListModule,MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule
   ,MatSidenavModule,
   MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
