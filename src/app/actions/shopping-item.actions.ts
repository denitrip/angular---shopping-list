import { Action } from '@ngrx/store';
import { ShoppingItemInterface } from '../reducers/shoppingItems/shopping-item.model';

export enum ShoppingItemActionsTypes {
  AddShoppingItem = '[ShoppingItem] Add ShoppingItem',
  DeleteShoppingItem = '[ShoppingItem] Delete ShoppingItem',
  CompleteShoppingItem = '[ShoppingItem] Complete ShoppingItem'
}

export class AddShoppingItem implements Action {
  readonly type = ShoppingItemActionsTypes.AddShoppingItem;
  constructor(public ShoppingItem: ShoppingItemInterface) {
    //
  }
}

export class DeleteShoppingItem implements Action {
  readonly type = ShoppingItemActionsTypes.DeleteShoppingItem;
  constructor(public ShoppingItem: ShoppingItemInterface) {
    //
  }
}

export type ShoppingItemActions = AddShoppingItem | DeleteShoppingItem;
