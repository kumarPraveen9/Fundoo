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
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import {MatCardModule} from '@angular/material/card';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { IconsnoteComponen } from './Components/iconsnote/iconsnote.component';
import { GetAllnotesComponent } from './Components/get-allnotes/get-allnotes.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { DeletenoteComponent } from './Components/deletenote/deletenote.component';
import { TrashnoteComponent } from './Components/trashnote/trashnote.component';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import { ArchivenoteComponent } from './Components/archivenote/archivenote.component';
import { ReminderComponent } from './Components/reminder/reminder.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { AuthguardService } from './authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    CreatenoteComponent,
    IconsnoteComponen,
    GetAllnotesComponent,
    DisplaynoteComponent,
    DeletenoteComponent,
    TrashnoteComponent,
    UpdatenoteComponent,
    ArchivenoteComponent,
    ReminderComponent,
    FilterPipe,
   
   
   
   
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
   MatCardModule,
   MatMenuModule,
   FormsModule,
   MatDialogModule
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
