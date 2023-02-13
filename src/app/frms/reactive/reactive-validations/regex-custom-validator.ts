import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function regexCustomValidator(regex: RegExp): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const regexResult = regex.test(control.value);

        return !regexResult ? {regex: {value: control.value}} : null;
    };
}