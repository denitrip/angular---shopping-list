import { AbstractControl } from '@angular/forms'

export function amountValidator(control: AbstractControl) {
    const valid = control.value ? control.value.replace(/[0-9]/gi,'') : '';
    return valid
        ? { invalidNumber: { valid: false, value: control.value } } 
        : !valid && control.value < 99999 ? null :
        { bigNumber: { valid: false, value: control.value } } 
}