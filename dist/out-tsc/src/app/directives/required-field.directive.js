import * as tslib_1 from "tslib";
import { Directive, HostBinding } from '@angular/core';
let RequiredDirective = class RequiredDirective {
    constructor() {
        this.isRequired = true;
    }
};
tslib_1.__decorate([
    HostBinding('class.is-required')
], RequiredDirective.prototype, "isRequired", void 0);
RequiredDirective = tslib_1.__decorate([
    Directive({
        selector: '[mwRequired]'
    })
], RequiredDirective);
export { RequiredDirective };
//# sourceMappingURL=required-field.directive.js.map