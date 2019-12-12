import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ViewPageComponent = class ViewPageComponent {
    constructor(shoppingItemService) {
        this.shoppingItemService = shoppingItemService;
    }
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
        ];
    }
    onMenuSelect(menuItem) {
        this.menuItems.forEach(e => {
            if (e === menuItem) {
                e.selected = true;
            }
            else {
                e.selected = false;
            }
        });
        this.shoppingItems = this.shoppingItemService.getShoppingListItems(menuItem.text);
    }
};
ViewPageComponent = tslib_1.__decorate([
    Component({
        selector: 'mw-view-page',
        templateUrl: './view-page.component.html'
    })
], ViewPageComponent);
export { ViewPageComponent };
//# sourceMappingURL=view-page.component.js.map