
import { Component, OnInit } from '@angular/core';
import { ShoppingItemService } from '../shopping-item/shopping-item.service';
import { shoppingItemInterface, itemsCount } from '../shopping-item/shopping-item.model';

export interface menuItemInterface {
    selected: Boolean;
    readonly text: 'active' | 'completed';
}

@Component({
    selector: 'mw-view-page',
    templateUrl: './view-page.component.html'
})

export class ViewPageComponent implements OnInit { 
    shoppingItems: Array<shoppingItemInterface>;
    menuItems: Array<menuItemInterface>;
    itemsNumber: itemsCount;

    constructor(private shoppingItemService: ShoppingItemService) {}

    ngOnInit() {
        this.shoppingItems = this.shoppingItemService.getShoppingListItems('active');
        this.menuItems = [
            {
                selected: true,
                text: 'active'
            },
            {
                selected: false,
                text: 'completed'
            }
        ]
        this.itemsNumber = this.shoppingItemService.getItemsCount();
    }

    onMenuSelect(menuItem: menuItemInterface) {
        this.menuItems.forEach(e => {
            if (e === menuItem) {
                e.selected = true;
            } else {
                e.selected = false;
            }
        })
        this.shoppingItems = this.shoppingItemService.getShoppingListItems(menuItem.text);
    }
}
