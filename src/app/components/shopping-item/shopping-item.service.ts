import {Injectable} from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {ShoppingItemInterface, ItemsCount} from '../../reducers/shoppingItems/shopping-item.model';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';
import {AddShoppingItem, DeleteShoppingItem} from '../../actions/shopping-item.actions';

@Injectable({
  providedIn: 'root'
})

export class ShoppingItemService {

  constructor(private notifierService: NotifierService, private store: Store<State>) {}

  deleteActivePosition(item: ShoppingItemInterface, notNotify?: boolean) {
    this.store.dispatch(new DeleteShoppingItem(item));
    if (!notNotify) {
      this.notifierService.notify('warning', 'Item has been removed');
    }
  }

  completePosition(item: ShoppingItemInterface) {
    this.deleteActivePosition(item, true);
    const newItem = {...item, status: 'completed'};
    this.store.dispatch(new AddShoppingItem(newItem));
    this.notifierService.notify('success', 'Item has been moved to completed list');
  }

  addShoppingItem(item: ShoppingItemInterface) {
    item.status = 'active';
    this.store.dispatch(new AddShoppingItem(item));
    this.notifierService.notify('success', 'Item has been added to active list');
  }
}
