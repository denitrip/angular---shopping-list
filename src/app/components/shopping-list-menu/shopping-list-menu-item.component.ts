import {Component, Input, EventEmitter, Output} from '@angular/core';
import {MenuItemInterface} from '../view-page/view-page.component';
import {ItemsCount} from '../../reducers/shoppingItems/shopping-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './shopping-list-menu-item.component.html'
})
export class ShoppingListMenuItemComponent {
  @Input() menuItems: Array<MenuItemInterface>;
  @Input() itemsNumber: ItemsCount;
  @Output() onMenuItemSelected = new EventEmitter();

  onSelected(menuItem: MenuItemInterface) {
    this.onMenuItemSelected.emit(menuItem);
  }
}
