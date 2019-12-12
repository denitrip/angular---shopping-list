import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { costValidator } from './validators/cost-validator';
import { amountValidator } from './validators/amount-validator';
import { titleValidator } from './validators/title-validator';
let AddPageComponent = class AddPageComponent {
    constructor(shoppingItemService, notifierService) {
        this.shoppingItemService = shoppingItemService;
        this.notifierService = notifierService;
        this.shoppingItemForm = new FormGroup({
            name: new FormControl('', [Validators.required, titleValidator]),
            cost: new FormControl('', [Validators.required, costValidator]),
            amount: new FormControl('', [Validators.required, amountValidator]),
            comment: new FormControl('')
        });
    }
    ;
    onSubmit() {
        this.shoppingItemService.addShoppingItem(this.shoppingItemForm.value);
        this.shoppingItemForm.reset();
    }
    resetToInitialState() {
        this.shoppingItemForm.reset();
        this.notifierService.notify('success', 'The form has been cleaned. Have a nice day!');
    }
    get amount() {
        return this.shoppingItemForm.get('amount');
    }
    get cost() {
        return this.shoppingItemForm.get('cost');
    }
    get title() {
        return this.shoppingItemForm.get('name');
    }
};
AddPageComponent = tslib_1.__decorate([
    Component({
        selector: 'mw-add-page',
        templateUrl: './add-page.component.html'
    })
], AddPageComponent);
export { AddPageComponent };
//# sourceMappingURL=add-page.component.js.map