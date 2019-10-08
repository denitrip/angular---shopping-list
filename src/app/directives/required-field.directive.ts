import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[mwRequired]'
})

export class RequiredDirective {
    @HostBinding('class.is-required') isRequired = true;
}