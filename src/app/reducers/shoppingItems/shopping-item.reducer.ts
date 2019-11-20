import { Action, createReducer, on } from '@ngrx/store';
import {ShoppingItemInterface} from './shopping-item.model';
import {AddShoppingItem, ShoppingItemActions, ShoppingItemActionsTypes} from '../../actions/shopping-item.actions';

export const shoppingItemFeatureKey = 'shoppingItem';

export interface ShoppingItemState {
  shoppingItems: Array<ShoppingItemInterface>;
}

export const initialState: ShoppingItemState = {
  shoppingItems: [
    {
      name: 'Milk',
      cost: '5',
      amount: '1 bottle',
      comment: 'Important!',
      status: 'active'
    },
    {
      name: 'Bread',
      cost: '2',
      amount: '2 pieces',
      comment: 'Please buy black bread',
      status: 'active'
    },
    {
      name: 'Sugar',
      cost: '4',
      amount: '1 packet',
      comment: '',
      status: 'active'
    },
    {
      name: 'Chicken',
      cost: '10',
      amount: '1 only',
      comment: '',
      status: 'active'
    },
    {
      name: 'Beer',
      cost: '4',
      amount: '2+ bottles',
      comment: 'Buy more!',
      status: 'active'
    },
    {
      name: 'Salat',
      cost: '3',
      amount: '1 packet',
      comment: '',
      status: 'active'
    },
    {
      name: 'Cherry',
      cost: '7',
      amount: '1 kilo',
      comment: '',
      status: 'completed'
    }
  ]
};

export function shoppingItemReducer(state = initialState, action: ShoppingItemActions): ShoppingItemState {
  switch (action.type) {
    case ShoppingItemActionsTypes.AddShoppingItem:
      return {...state, shoppingItems: [...state.shoppingItems, action.ShoppingItem]};
    case ShoppingItemActionsTypes.DeleteShoppingItem:
      return {...state, shoppingItems: state.shoppingItems.filter(item => item !== action.ShoppingItem)};
    default:
      return state;
  }
}
