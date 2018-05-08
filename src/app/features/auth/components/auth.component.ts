import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [ AuthService ]
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      password: [null, [Validators.required, Validators.maxLength(30)]],
      adminCode: [null, Validators.maxLength(30)]
    }, {
      updateOn: 'submit'
    });
  }

  signIn() {
    if (this.authForm.valid) {
      this.authService.signIn(this.authForm.value).subscribe((res: any) => {
        if (res.authenticated) {
          this.router.navigate(['./main']);
        } else {
          this.snackBar.open('Wrong User Name Or Password, Please Enter Valid Data.', ' ', {
            duration: 3000,
            verticalPosition: 'top',
            extraClasses: ['custom-snack-bar']
          });
        }
      });
    }
  }

  signUp() {
    if (this.authForm.valid) {
      this.authService.signUp(this.authForm.value).subscribe((res: any) => {
        if (res.saved) {
          this.router.navigate(['./main']);
        } else {
          this.snackBar.open('Wrong User Name Or Password, Please Enter Valid Data.', ' ', {
            duration: 3000,
            verticalPosition: 'top',
            extraClasses: ['custom-snack-bar']
          });
        }
      });
    }
  }

}
