import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from "./must-match/validate-password";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  hide : boolean = true;
  constructor(private formBuilder: FormBuilder,private _snackBar:MatSnackBar) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
           
            firstName: ['', [Validators.required,Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
            lastName: ['', [Validators.required,Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        },

            {
              validator: MustMatch('password', 'confirmPassword')// custom validation
          }
            
        );
      }
     
      register()
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
