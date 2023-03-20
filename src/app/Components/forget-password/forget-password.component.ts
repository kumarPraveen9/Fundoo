import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user/user.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$'
          ),
        ],
      ],
    });
  }

  forge() {
    if (this.registerForm.valid) {
      let data = {
        email: this.registerForm.value.email,
      };

      this.userService.forgotPassword(data).subscribe(
        (response: any) => {
          console.log('Register cli successful', response);
          this._snackBar.open('Registration Successfull', '', {
            duration: 5000,
            horizontalPosition: 'start',
          });
        },
        (error) => {
          console.log(error.message);
          let response = error.message;
          const rs1 = 422;
          const rs2 = 401;
          const rs3=404;
          if (response.includes(rs1)) {
            this._snackBar.open('Input has been already registered', '422', {
              duration: 15000,
              horizontalPosition: 'start',
            });
          } else if (response.includes(rs2)) {
            this._snackBar.open('Invalid Credentials', '401', {
              duration: 15000,
              horizontalPosition: 'start',
            });
          }
          else if (response.includes(rs3)) {
            this._snackBar.open('mail Not Found:enter valid one', '404', {
              duration: 15000,
              horizontalPosition: 'start',
            });
          }
          // handle error here
          //this._snackBar.open(error.message,'',{duration:5000, horizontalPosition: 'start'});
        }
      );
      console.log('reg called:', this.registerForm.value);
    } else {
      console.log('fill all the fields');
      this._snackBar.open('fill all the fields properly', '', {
        duration: 5000,
        horizontalPosition: 'start',
      });
    }
  }
}
