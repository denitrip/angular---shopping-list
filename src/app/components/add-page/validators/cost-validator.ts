import {AbstractControl} from '@angular/forms';

export function costValidator(control: AbstractControl): { [key: string]: any } | null {
  const valid = control.value ? control.value.replace(/[0-9]/gi, '') : '';
  return valid
    ? {invalidNumber: {valid: false, value: control.value}}
    : null;
}
