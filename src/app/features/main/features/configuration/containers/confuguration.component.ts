import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { TransactionCategoryModel } from '@share/models/transaction-category.model';

import { ConfigurationService } from './../services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  incomeCategories: TransactionCategoryModel[];
  expenseCategories: TransactionCategoryModel[];

  changeUserPasswordForm: FormGroup;
  removeUserForm: FormGroup;

  constructor(private fb: FormBuilder,
              private configurationService: ConfigurationService,
              public snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.initChangeUserPasswordForm();
    this.initRemoveUserForm();
  }

  getCategories() {
    this.configurationService.getTransactionCathegory().subscribe((res: TransactionCategoryModel[]) => {
      this.incomeCategories = res.filter(el => el.type === 'income');
      this.expenseCategories = res.filter(el => el.type === 'expense');
    });
  }

  initChangeUserPasswordForm() {
    this.changeUserPasswordForm = this.fb.group({
      name: ['', Validators.required ],
      oldPassword: ['', Validators.required ],
      password: ['', [Validators.required, Validators.minLength(8)] ],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)] ],
    });
  }

  initRemoveUserForm() {
    this.removeUserForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  createNewCategory(data) {
    const cathegory = { ...data, id: +new Date(), author: localStorage.getItem('user') };
    this.configurationService.addTransactionCathegory(cathegory)
      .subscribe((res: TransactionCategoryModel) => {
        if (res.type === 'income') {
          this.incomeCategories.push(res);
        } else if (res.type === 'expense') {
          this.expenseCategories.push(res);
        }
      });
  }

  removeTransactionCathegory(id) {
    this.configurationService.removeTransactionCathegory(id)
      .subscribe((res: TransactionCategoryModel) => {
        if (res.type === 'income') {
          this.incomeCategories = this.incomeCategories.filter(el => el.id !== res.id);
        } else if (res.type === 'expense') {
          this.expenseCategories = this.expenseCategories.filter(el => el.id !== res.id);
        }
      });
  }

  changeUserPassword() {
    if (this.changeUserPasswordForm.valid) {
      const { name, oldPassword, password, confirmPassword } = this.changeUserPasswordForm.value;
      if (password === confirmPassword) {
        this.configurationService.changeUserPassword({ name, oldPassword, password }).subscribe(
          res => {
            console.log({res});
          },
          err => {
            console.log({err});
          });
      } else {
        this.snackBar.open('New Password and Confirm New Password MUST BE IDENTICAL!', ' ', {
          duration: 3000,
          verticalPosition: 'top',
          extraClasses: ['custom-snack-bar']
        });
      }
    } else {
      this.snackBar.open('All fields are required, min password length is 8 symbols!', ' ', {
        duration: 3000,
        verticalPosition: 'top',
        extraClasses: ['custom-snack-bar']
      });
    }
  }

  removeUser() {
    if (this.removeUserForm.valid) {
      const { name, password } = this.removeUserForm.value;
      console.log(name);
      this.configurationService.removeUser({ name, password }).subscribe(
        res => {
          this.router.navigate(['/auth']);
          console.log({res});
        },
        err => {
          console.log({err});
        });
    } else {
      this.snackBar.open('All fields are required, min password length is 8 symbols!', ' ', {
        duration: 3000,
        verticalPosition: 'top',
        extraClasses: ['custom-snack-bar']
      });
    }
  }

}
