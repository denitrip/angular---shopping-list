export function costValidator(control) {
    const valid = control.value ? control.value.replace(/[0-9]/gi, '') : '';
    return valid
        ? { invalidNumber: { valid: false, value: control.value } }
        : null;
}
//# sourceMappingURL=cost-validator.js.map