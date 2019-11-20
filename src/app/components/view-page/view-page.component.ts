import {Component, OnInit} from '@angular/core';
import {ShoppingItemService} from '../shopping-item/shopping-item.service';
import {ShoppingItemInterface, ItemsCount} from '../../reducers/shoppingItems/shopping-item.model';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';

export interface MenuItemInterface {
  selected: boolean;
  readonly text: 'active' | 'completed';
}

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html'
})

export class ViewPageComponent implements OnInit {
  shoppingItems: Array<ShoppingItemInterface>;
  menuItems: Array<MenuItemInterface>;
  menuState: string;
  itemsNumber: ItemsCount;

  constructor(private shoppingItemService: ShoppingItemService, private store: Store<State>) {
                store.select(state => state.shoppingItems).subscribe(items => {
                this.shoppingItems = items ? items.shoppingItems : [];
                this.itemsNumber = {
                  active: items ? items.shoppingItems.filter(el => el.status === 'active').length : 0,
                  completed: items ? items.shoppingItems.filter(el => el.status === 'completed').length : 0
                };
              });
  }

  ngOnInit() {
    this.menuState = 'active';
    this.menuItems = [
      {
        selected: true,
        text: 'active'
      },
      {
        selected: false,
        text: 'completed'
      }
    ];
  }

  onMenuSelect(menuItem: MenuItemInterface) {
    this.menuState = menuItem.text;
    this.menuItems.forEach(e => {
      e.selected = e === menuItem;
    });
  }
}
