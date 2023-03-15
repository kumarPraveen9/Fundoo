import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from "./must-match/validate-password";
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  hide : boolean = true;
  constructor(private formBuilder: FormBuilder,private _snackBar:MatSnackBar) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
           
           
         
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        },

            {
              validator: MustMatch('password', 'confirmPassword')// custom validation
          }
            
        );
      }
     
      reset()
      {
        if(this.registerForm.valid){
        console.log("reg called:",this.registerForm.value);
        this._snackBar.open("Registration Successfull",'',{duration:5000,horizontalPosition: 'start'});
        }
        else{
          console.log("fill all the fields");
           this._snackBar.open("Registration Failed",'',{duration:5000, horizontalPosition: 'start'});
          
        }
      }

      ShowPassword(){
        this.hide = !this.hide;            
    }
}
