
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { menuItemInterface } from '../view-page/view-page.component';
import { itemsCount } from '../shopping-item/shopping-item.model'

@Component({
    selector: 'mw-menu-item',
    templateUrl: './shopping-list-menu-item.component.html'
})
export class ShoppingListMenuItemComponent{ 
    @Input() menuItems: Array<menuItemInterface>; 
    @Input() itemsNumber: itemsCount;
    @Output() onMenuItemSelected = new EventEmitter();

    onSelected(menuItem: menuItemInterface) {
        this.onMenuItemSelected.emit(menuItem)
    }
}
