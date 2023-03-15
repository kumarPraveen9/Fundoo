import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  registerForm!: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder,private _snackBar:MatSnackBar) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
           
            
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")]],
          
        },

           
        );
      }
     
      login()
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



}
