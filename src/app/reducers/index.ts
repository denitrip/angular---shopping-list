import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ShoppingItemState, shoppingItemReducer } from './shoppingItems/shopping-item.reducer';

export interface State {
  shoppingItems: ShoppingItemState;
}

export const reducers: ActionReducerMap<State> = {
  shoppingItems: shoppingItemReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
