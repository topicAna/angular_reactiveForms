import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailRegex = RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'Email must be in a valid format'
        }
    };

    return !valid ? errors : null;
}