import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, ValidatorFn } from "@angular/forms";
import { map, catchError, of, Observable } from 'rxjs';
import { CustomValidatorService } from '../../services/custom-validator.service';

//custom synchronous validator for one control
export function RegexCustomValidator(regex: RegExp): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const regexResult = regex.test(control.value);

        return !regexResult ? {regex: {value: control.value}} : null;
    };
}

//custom synchronous validator for two or more controls
export const PasswordCustomValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const password1 = control.get('password1');
    const password2 = control.get('password2');

    return password1 && password2 && password1.value != password2.value ? { password: true } : null;
};

//custom asynchronous validator for one control
@Injectable({ providedIn: 'root' })
export class UserNameCustomValidator implements AsyncValidator {
  
  constructor(private customValidatorService: CustomValidatorService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.customValidatorService.isUserNameTaken(control.value).pipe(
      map(isTaken => (isTaken 
        ? { username: true } 
        : null)),
      catchError(() => of(null))
    );
  }
}