import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
;
let ShoppingItemService = class ShoppingItemService {
    constructor(notifierService) {
        this.notifierService = notifierService;
        this.shoppingItemsActive = [
            {
                name: 'Milk',
                cost: '5',
                amount: '1 bottle',
                comment: 'Important!',
                status: "active"
            },
            {
                name: 'Bread',
                cost: '2',
                amount: '2 pieces',
                comment: 'Please buy black bread',
                status: "active"
            },
            {
                name: 'Sugar',
                cost: '4',
                amount: '1 packet',
                status: "active"
            },
            {
                name: 'Chicken',
                cost: '10',
                amount: '1 only',
                status: "active"
            },
            {
                name: 'Beer',
                cost: '4',
                amount: '2+ bottles',
                comment: 'Buy more!',
                status: "active"
            },
            {
                name: 'Salat',
                cost: '3',
                amount: '1 packet',
                status: "active"
            }
        ];
        this.shoppingItemsCompleted = [
            {
                name: 'Cherry',
                cost: '7',
                amount: '1 kilo',
                status: "completed"
            }
        ];
    }
    getShoppingListItems(status) {
        return status === 'active' ? this.shoppingItemsActive : this.shoppingItemsCompleted;
    }
    deleteActivePosition(item, notNotify) {
        let editingShoppingList = item.status === 'active' ? this.shoppingItemsActive : this.shoppingItemsCompleted;
        const index = editingShoppingList.indexOf(item);
        if (index >= 0) {
            editingShoppingList.splice(index, 1);
        }
        if (!notNotify) {
            this.notifierService.notify('warning', 'Item has been removed');
        }
    }
    completePosition(item) {
        this.deleteActivePosition(item, true);
        item.status = 'completed';
        this.shoppingItemsCompleted.push(item);
        this.notifierService.notify('success', 'Item has been moved to completed list');
    }
    addShoppingItem(item) {
        item.status = 'active';
        this.shoppingItemsActive.push(item);
        this.notifierService.notify('success', 'Item has been added to active list');
    }
};
ShoppingItemService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ShoppingItemService);
export { ShoppingItemService };
//# sourceMappingURL=shopping-item.service.js.map