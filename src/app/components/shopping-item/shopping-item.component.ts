import {Component, Input} from '@angular/core';
import {ShoppingItemService} from './shopping-item.service';
import {ShoppingItemInterface} from './shopping-item.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html'
})
export class ShoppingItemComponent {
  @Input() shoppingItem: ShoppingItemInterface;

  constructor(private shoppingItemService: ShoppingItemService) {
  }

  onDeleteItem() {
    this.shoppingItemService.deleteActivePosition(this.shoppingItem);
  }

  onCompleteItem() {
    this.shoppingItemService.completePosition(this.shoppingItem);
  }
}
