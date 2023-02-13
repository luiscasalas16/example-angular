import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive
({
    selector: '[regexCustomValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: RegexCustomValidatorDirective, multi: true}]
})
export class RegexCustomValidatorDirective implements Validator
{
    @Input('regexCustomValidator') regex = '';

    validate(control: AbstractControl) : ValidationErrors | null {

        const regexResult = new RegExp(this.regex, 'g').test(control.value);

        return !regexResult ? {regex: {value: control.value}} : null;
    }
}

@Directive
({
    selector: '[passwordCustomValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordCustomValidatorDirective, multi: true }]
})
export class PasswordCustomValidatorDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        
        const password1 = control.get('password1');
        const password2 = control.get('password2');

        return password1 && password2 && password1.value != password2.value ? { password: true } : null;
    }
}