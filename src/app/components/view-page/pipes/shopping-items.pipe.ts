import {Pipe, PipeTransform} from '@angular/core';
import {ShoppingItemInterface} from '../../../reducers/shoppingItems/shopping-item.model';

@Pipe({
  name: 'ShoppingItemsFilter',
  pure: false
})
export class ShoppingItemsPipe implements PipeTransform {
  transform(items: Array<ShoppingItemInterface>, filter: string): any {
    return items ? items.filter(item => item.status === filter) : [];
  }
}
