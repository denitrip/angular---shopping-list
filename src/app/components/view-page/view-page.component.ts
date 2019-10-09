
import { Component, OnInit } from '@angular/core';
import { ShoppingItemService, shoppingItemInterface } from '../shopping-item/shopping-item.service';

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
