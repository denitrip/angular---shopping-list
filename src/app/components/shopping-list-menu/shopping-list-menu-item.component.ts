
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'mw-menu-item',
    templateUrl: './shopping-list-menu-item.component.html'
})
export class ShoppingListMenuItemComponent{ 
    @Input() menuItems;
    @Output() onMenuItemSelected = new EventEmitter();

    onSelected(event) {
        this.onMenuItemSelected.emit(event)
    }
}
