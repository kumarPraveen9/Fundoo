import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NodeService } from 'src/app/Services/note/node.service';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  display: boolean = true;
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private nodeService: NodeService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addnote() {
    if (this.registerForm.valid) {
      let data = {
        title: this.registerForm.value.title,
        description: this.registerForm.value.description,
      };
      console.log("hey ssajs",data);

      this.nodeService.addnote(data).subscribe(
        (response: any) => {
          console.log('addNote cli successful', response);
          //localStorage.setItem('token',response.id);
          this._snackBar.open('note added succesfully', '', {
            duration: 15000,
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
    this.show();
  }

  show() {
    this.display = !this.display;
  }
}
