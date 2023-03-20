import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from './must-match/validate-password';
import { UserService } from 'src/app/Services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  token: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },

      {
        validator: MustMatch('password', 'confirmPassword'), // custom validation
      }
    );
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }

  reset() {
    if (this.registerForm.valid) {
      let data = {
        password: this.registerForm.value.password,
      };

      this.userService.resetPassword(data, this.token).subscribe(
        (response: any) => {
          console.log('reset successful', response);
          this._snackBar.open('reset Successfull', '', {
            duration: 5000,
            horizontalPosition: 'start',
          });
        },
        (error) => {
          console.log(error.message);
          let response = error.message;
          const rs1 = 422;
          const rs2 = 401;
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

  ShowPassword() {
    this.hide = !this.hide;
  }
}
