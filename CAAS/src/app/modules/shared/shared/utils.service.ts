import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(public dialog: MatDialog) { 
}


validationMessages: any = {
  'email': [
    { type: 'required', message: 'Please enter email address' },
    { type: 'pattern', message: 'Please enter a valid email address' }
  ],
  'password': [
      { type: 'required', message: 'Please enter password' },
    ],
};

   validators: any = {
    email: [Validators.pattern(/^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/),
    (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return {
          required: true
        }
      }
      else {
        return null;
      }
    }],
}
  getErrorMessage(userForm: FormGroup, key: string) {
    let err = this.validationMessages[key].find((val: any) => {
      return userForm?.get(key)?.hasError(val.type);
    });
    return err;
  }
   }



