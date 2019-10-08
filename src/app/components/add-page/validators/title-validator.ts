import { AbstractControl } from '@angular/forms'

export function titleValidator(control: AbstractControl) {
  return control.value && control.value.length > 20 
    ? { tooLong: { valid: false, value: control.value } }
    : null
}