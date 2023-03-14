import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components//login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'forget',component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
