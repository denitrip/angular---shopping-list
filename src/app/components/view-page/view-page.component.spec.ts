import {AppMenuComponent} from '../app-menu/app-menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ComponentFixture, TestBed, tick, fakeAsync} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routes} from '../../app-routing.module';
import {WelcomePageComponent} from '../welcome-page/welcome-page.component';
import {ViewPageComponent} from './view-page.component';
import {AddPageComponent} from '../add-page/add-page.component';
import {ShoppingItemComponent} from '../shopping-item/shopping-item.component';
import {ShoppingItemService} from '../shopping-item/shopping-item.service';
import {ShoppingListMenuItemComponent} from '../shopping-list-menu/shopping-list-menu-item.component';
import {NotifierModule} from 'angular-notifier';
import {PriceCurrencyPipe} from '../shopping-item/pipes/price.pipe';
import {ShoppingItemsPipe} from './pipes/shopping-items.pipe';
import {Store, StoreModule} from '@ngrx/store';

describe('ViewPageComponent', () => {
  let sut: ViewPageComponent;
  let fixture: ComponentFixture<ViewPageComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), FormsModule, ReactiveFormsModule, NotifierModule, StoreModule.forRoot({})],
      declarations: [AppMenuComponent, WelcomePageComponent, ViewPageComponent, AddPageComponent, ShoppingItemComponent,
        ShoppingListMenuItemComponent, PriceCurrencyPipe, ShoppingItemsPipe],
      providers: [ShoppingItemService, Store]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ViewPageComponent);
    sut = fixture.componentInstance;
    sut.shoppingItems = [
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
    ];
    sut.itemsNumber = {
      active: sut.shoppingItems.filter(el => el.status === 'active').length,
      completed: sut.shoppingItems.filter(el => el.status === 'completed').length
    };
  });

  describe('Test view-page component', () => {
    it('Component renders with a text Shopping List', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const label: HTMLSpanElement = nativeElement.querySelector('.shopping-list__header--text');
      expect(label.textContent.trim()).toBe('Shopping List');
    });
    it('Component renders shopping items', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const items: NodeListOf<any> = nativeElement.querySelectorAll('app-shopping-item');
      expect(items.length).toBeGreaterThan(1);
    });
    it('Component renders view page menu', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const items: NodeListOf<any> = nativeElement.querySelectorAll('.menu-section__option');
      expect(items.length).toBe(sut.menuItems.length);
    });
    it('Active menu button is initially active', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const activeMenuButton: HTMLDivElement = nativeElement.querySelector('.menu-section--selected');
      expect(activeMenuButton.textContent).toContain('active');
    });
    it('After selecting completed menu section load completed items', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const itemsCount: number = nativeElement.querySelectorAll('.shopping-item').length;
      expect(itemsCount).toBe(sut.itemsNumber.completed);
    });
    it('After selecting completed menu section this section become active', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const activeMenuButton: HTMLDivElement = nativeElement.querySelector('.menu-section--selected');
      expect(activeMenuButton.textContent).toContain('completed');
    });
    /*it('After clicking on delete item button - item moves to completed items list', () => {
      fixture.detectChanges();
      const initialNumberOfItems = sut.shoppingItems.length;
      const nativeElement: HTMLElement = fixture.nativeElement;
      const deleteButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__header--delete-btn');
      deleteButton.click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBeGreaterThan(sut.shoppingItems.length);
    });
    it('After clicking on complete item button - item remove from active items list', () => {
      fixture.detectChanges();
      const initialNumberOfItems = sut.shoppingItems.length;
      const nativeElement: HTMLElement = fixture.nativeElement;
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__footer--done');
      completeButton.click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBeGreaterThan(sut.shoppingItems.length);
    });
    it('After clicking on complete item button - item moves to completed items list', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const initialNumberOfItems = sut.shoppingItems.length;
      menuButtons[0].click();
      fixture.detectChanges();
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__footer--done');
      completeButton.click();
      fixture.detectChanges();
      menuButtons[1].click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBeLessThan(sut.shoppingItems.length);
    })
    it('After clicking on delete item button - item do not moves to completed items list', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const initialNumberOfItems = sut.shoppingItems.length;
      menuButtons[0].click();
      fixture.detectChanges();
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__header--delete-btn');
      completeButton.click();
      fixture.detectChanges();
      menuButtons[1].click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBe(sut.shoppingItems.length);
    });
    it('After clicking on delete active item button - active item counter decrements', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      console.log(sut, fixture)
      const initialNumberOfItems = sut.itemsNumber.active;
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__header--delete-btn');
      completeButton.click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBeGreaterThan(sut.itemsNumber.active);
    });
    it('After clicking on delete completed item button - completed item counter decrements', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const initialNumberOfItems = sut.itemsNumber.completed;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__header--delete-btn');
      completeButton.click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBeGreaterThan(sut.itemsNumber.completed);
    });
    it('After clicking on complete item button - active item counter decrements', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const initialNumberOfItems = sut.itemsNumber.active;
      menuButtons[0].click();
      fixture.detectChanges();
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__footer--done');
      completeButton.click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBeGreaterThan(sut.itemsNumber.active);
    });
    it('After clicking on complete item button - completed item counter inrements', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const initialNumberOfItems = sut.itemsNumber.completed;
      menuButtons[0].click();
      fixture.detectChanges();
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__footer--done');
      completeButton.click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBeLessThan(sut.itemsNumber.completed);
    });
    */
    it('Completed item button is not visible in completed items list', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__footer--done');
      expect(completeButton).toBe(null);
    });
    it('After clicking on delete completed item button - active item counter do not changes', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const initialNumberOfItems = sut.itemsNumber.active;
      const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
      menuButtons[1].click();
      fixture.detectChanges();
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__header--delete-btn');
      completeButton.click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBe(sut.itemsNumber.active);
    });
    it('After clicking on delete active item button - completed item counter do not changes', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const initialNumberOfItems = sut.itemsNumber.completed;
      const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__header--delete-btn');
      completeButton.click();
      fixture.detectChanges();
      expect(initialNumberOfItems).toBe(sut.itemsNumber.completed);
    });
  });
});
