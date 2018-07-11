import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import {
  AMErrorStateMatcher
} from '@share/angular-material-error-matcher/angular-material-error-matcher';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  matcher = new AMErrorStateMatcher();
  minNameLength = 6;
  maxNameLength = 25;
  minPswdLength = 6;
  maxPswdLength = 12;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(this.minNameLength),
          Validators.maxLength(this.maxNameLength)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(this.minPswdLength),
          Validators.maxLength(this.maxPswdLength)
        ]
      ],
      adminCode: ['',
        [
          Validators.minLength(this.minPswdLength),
          Validators.maxLength(this.maxPswdLength)
        ]
      ]
    }, {
      updateOn: 'submit'
    });
  }

  signIn() {
    if (this.authForm.valid) {
      this.authService.signIn(this.authForm.value).subscribe((res: any) => {
        if (res.authenticated) {
          this.router.navigate(['./main/transactions-list']);
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
          this.router.navigate(['./main/transactions-list']);
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
