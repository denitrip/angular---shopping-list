import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let ShoppingListMenuItemComponent = class ShoppingListMenuItemComponent {
    constructor() {
        this.onMenuItemSelected = new EventEmitter();
    }
    onSelected(menuItem) {
        this.onMenuItemSelected.emit(menuItem);
    }
};
tslib_1.__decorate([
    Input()
], ShoppingListMenuItemComponent.prototype, "menuItems", void 0);
tslib_1.__decorate([
    Output()
], ShoppingListMenuItemComponent.prototype, "onMenuItemSelected", void 0);
ShoppingListMenuItemComponent = tslib_1.__decorate([
    Component({
        selector: 'mw-menu-item',
        templateUrl: './shopping-list-menu-item.component.html'
    })
], ShoppingListMenuItemComponent);
export { ShoppingListMenuItemComponent };
//# sourceMappingURL=shopping-list-menu-item.component.js.map