import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Components/Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  registerForm!: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder,private userService : UserService,private _snackBar:MatSnackBar) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
           
            
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        },

           
        );
      }
     
      login()
      {
        if(this.registerForm.valid){
          let data = {
            
            email: this.registerForm.value.email,
            password:this.registerForm.value.password
          }
          
          this.userService.login(data).subscribe((response:any)=>{
              console.log("login cli successful", response);
              this._snackBar.open("login Successfull",'',{duration:5000,horizontalPosition: 'start'});  },
              (error) => {
                console.log(error.message);
                // handle error here
                this._snackBar.open(error.message,'',{duration:5000, horizontalPosition: 'start'});
                }
              );
        console.log("reg called:",this.registerForm.value);
       
        }
        else{
          console.log("fill all the fields");
           this._snackBar.open("fill all the fields properly",'',{duration:5000, horizontalPosition: 'start'});
          
        }
      }



}
