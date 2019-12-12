export function titleValidator(control) {
    return control.value && control.value.length > 20
        ? { tooLong: { valid: false, value: control.value } }
        : null;
}
//# sourceMappingURL=title-validator.js.map