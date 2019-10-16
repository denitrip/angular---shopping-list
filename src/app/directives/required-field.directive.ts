import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[mwRequired]'
})

export class RequiredDirective {
    @HostBinding('class.is-required') isRequired = true;
}