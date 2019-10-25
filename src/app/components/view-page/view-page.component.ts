import {Component, OnInit} from '@angular/core';
import {ShoppingItemService} from '../shopping-item/shopping-item.service';
import {ShoppingItemInterface, ItemsCount} from '../shopping-item/shopping-item.model';

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
  itemsNumber: ItemsCount;

  constructor(private shoppingItemService: ShoppingItemService) {
  }

  ngOnInit() {
    this.shoppingItems = this.shoppingItemService.getShoppingListItems('active');
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
    this.itemsNumber = this.shoppingItemService.getItemsCount();
  }

  onMenuSelect(menuItem: MenuItemInterface) {
    this.menuItems.forEach(e => {
      e.selected = e === menuItem;
    });
    this.shoppingItems = this.shoppingItemService.getShoppingListItems(menuItem.text);
  }
}
