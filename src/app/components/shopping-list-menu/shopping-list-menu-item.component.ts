
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { menuItemInterface } from '../view-page/view-page.component';

@Component({
    selector: 'mw-menu-item',
    templateUrl: './shopping-list-menu-item.component.html'
})
export class ShoppingListMenuItemComponent{ 
    @Input() menuItems: Array<menuItemInterface>;
    @Output() onMenuItemSelected = new EventEmitter();

    onSelected(menuItem: menuItemInterface) {
        this.onMenuItemSelected.emit(menuItem)
    }
}
