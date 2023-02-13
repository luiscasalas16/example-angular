import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function RegexCustomValidator(regex: RegExp): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const regexResult = regex.test(control.value);

        return !regexResult ? {regex: {value: control.value}} : null;
    };
}

export const PasswordCustomValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password1 = control.get('password1');
    const password2 = control.get('password2');

    return password1 && password2 && password1.value != password2.value ? { password: true } : null;
};