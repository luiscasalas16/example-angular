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