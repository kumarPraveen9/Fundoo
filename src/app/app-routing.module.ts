import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components//login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllnotesComponent } from './Components/get-allnotes/get-allnotes.component';
import { TrashnoteComponent } from './Components/trashnote/trashnote.component';
import { ArchivenoteComponent } from './Components/archivenote/archivenote.component';
import { ReminderComponent } from './Components/reminder/reminder.component';


const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'forget',component:ForgetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
   children:[
    {path:'notes',component:GetAllnotesComponent},
    {path:'trash',component:TrashnoteComponent},
    {path:'archive',component:ArchivenoteComponent},
    {path:'reminder',component:ReminderComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
