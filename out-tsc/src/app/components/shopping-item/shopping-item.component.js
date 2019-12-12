import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ShoppingItemComponent = class ShoppingItemComponent {
    constructor(shoppingItemService) {
        this.shoppingItemService = shoppingItemService;
    }
    onDeleteItem() {
        this.shoppingItemService.deleteActivePosition(this.shoppingItem);
    }
    onCompleteItem() {
        this.shoppingItemService.completePosition(this.shoppingItem);
    }
};
tslib_1.__decorate([
    Input()
], ShoppingItemComponent.prototype, "shoppingItem", void 0);
ShoppingItemComponent = tslib_1.__decorate([
    Component({
        selector: 'mw-shopping-item',
        templateUrl: './shopping-item.component.html'
    })
], ShoppingItemComponent);
export { ShoppingItemComponent };
//# sourceMappingURL=shopping-item.component.js.map