import { Directive, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  AsyncValidator,
} from '@angular/forms';
import { map, catchError, of, Observable } from 'rxjs';
import { CustomValidatorService } from '../../services/custom-validator.service';

//custom synchronous validator for one control
@Directive({
  selector: '[regexCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RegexCustomValidatorDirective,
      multi: true,
    },
  ],
})
export class RegexCustomValidatorDirective implements Validator {
  @Input('regexCustomValidator') regex = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const regexResult = new RegExp(this.regex, 'g').test(control.value);

    return !regexResult ? { regex: { value: control.value } } : null;
  }
}

//custom synchronous validator for two or more controls
@Directive({
  selector: '[passwordCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordCustomValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordCustomValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const password1 = control.get('password1');
    const password2 = control.get('password2');

    return password1 && password2 && password1.value != password2.value
      ? { password: true }
      : null;
  }
}

//custom asynchronous validator for one control
@Directive({
  selector: '[userNameCustomValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UserNameCustomValidatorDirective),
      multi: true,
    },
  ],
})
export class UserNameCustomValidatorDirective implements AsyncValidator {
  constructor(private customValidatorService: CustomValidatorService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.customValidatorService.isUserNameTaken(control.value).pipe(
      map((isTaken) => (isTaken ? { username: true } : null)),
      catchError(() => of(null))
    );
  }
}
