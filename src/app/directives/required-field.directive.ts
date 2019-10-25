import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[appRequired]'
})

export class RequiredDirective {
    @HostBinding('class.is-required') isRequired = true;
}
