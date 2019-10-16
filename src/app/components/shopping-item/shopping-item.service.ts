import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { shoppingItemInterface, itemsCount } from './shopping-item.model';

@Injectable({
    providedIn: 'root'
})

export class ShoppingItemService{
    shoppingItemsActive = [
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
            comment: '',
            status: "active"
        },
        {
            name: 'Chicken',
            cost: '10',
            amount: '1 only',
            comment: '',
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
            comment: '',
            status: "active"
        }
    ]

    shoppingItemsCompleted = [
        {
            name: 'Cherry',
            cost: '7',
            amount: '1 kilo',
            comment: '',
            status: "completed"
        }
    ]

    shoppingItemsNumber = {
        active: this.shoppingItemsActive.length,
        completed: this.shoppingItemsCompleted.length
    }

    constructor(private notifierService: NotifierService) {}

    getShoppingListItems(status: String): Array<shoppingItemInterface> {
        return status === 'active' ? this.shoppingItemsActive : this.shoppingItemsCompleted;
    }

    deleteActivePosition(item: shoppingItemInterface, notNotify?: Boolean) {
        let editingShoppingList = item.status === 'active' ? this.shoppingItemsActive : this.shoppingItemsCompleted;
        const index = editingShoppingList.indexOf(item);
        if (index >= 0) {
            editingShoppingList.splice(index, 1);
        }
        if (!notNotify) {
            this.notifierService.notify('warning', 'Item has been removed');
        }
        this.calculateItemsNumber();
    }

    getItemsCount(): itemsCount {
        return this.shoppingItemsNumber;
    }

    completePosition(item: shoppingItemInterface) {
        this.deleteActivePosition(item, true);
        item.status = 'completed';
        this.shoppingItemsCompleted.push(item);
        this.notifierService.notify('success', 'Item has been moved to completed list');
        this.calculateItemsNumber();
    }

    addShoppingItem(item: shoppingItemInterface) {
        item.status = 'active'
        this.shoppingItemsActive.push(item);
        this.notifierService.notify('success', 'Item has been added to active list');
        this.calculateItemsNumber();
    }

    private calculateItemsNumber() {
        this.shoppingItemsNumber.active = this.shoppingItemsActive.length;
        this.shoppingItemsNumber.completed = this.shoppingItemsCompleted.length;
    }
}