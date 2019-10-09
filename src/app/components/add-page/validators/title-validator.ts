import { AbstractControl, ControlContainer } from '@angular/forms'

export function titleValidator(control: AbstractControl): { [key: string]: any } | null {
  return control.value && control.value.length > 20 
    ? { tooLong: { valid: false, value: control.value } }
    : null
}