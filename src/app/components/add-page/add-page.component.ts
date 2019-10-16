
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShoppingItemService } from '../shopping-item/shopping-item.service';
import { NotifierService } from 'angular-notifier';
import { costValidator } from './validators/cost-validator';
import { amountValidator } from './validators/amount-validator';
import { titleValidator } from './validators/title-validator';

@Component({
    selector: 'mw-add-page',
    templateUrl: './add-page.component.html'
})
export class AddPageComponent{
    shoppingItemForm = new FormGroup({
        name: new FormControl('', [Validators.required, titleValidator]),
        cost: new FormControl('', [Validators.required, costValidator]),
        amount: new FormControl('', [Validators.required, amountValidator]),
        comment: new FormControl('')
    });

    constructor(private shoppingItemService: ShoppingItemService,
        private notifierService: NotifierService) {}

    onSubmit() {
        this.shoppingItemService.addShoppingItem(this.shoppingItemForm.value);
        this.shoppingItemForm.reset();
    }

    resetToInitialState() {
        this.shoppingItemForm.reset();
        this.notifierService.notify('success', 'The form has been cleaned. Have a nice day!')
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
}
