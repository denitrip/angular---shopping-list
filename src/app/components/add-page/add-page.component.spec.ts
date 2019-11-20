import {AppMenuComponent} from '../app-menu/app-menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ComponentFixture, TestBed, tick, fakeAsync} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routes} from '../../app-routing.module';
import {WelcomePageComponent} from '../welcome-page/welcome-page.component';
import {ViewPageComponent} from '../view-page/view-page.component';
import {AddPageComponent} from './add-page.component';
import {ShoppingItemComponent} from '../shopping-item/shopping-item.component';
import {ShoppingItemService} from '../shopping-item/shopping-item.service';
import {ShoppingListMenuItemComponent} from '../shopping-list-menu/shopping-list-menu-item.component';
import {NotifierModule} from 'angular-notifier';
import {PriceCurrencyPipe} from '../shopping-item/pipes/price.pipe';
import {ShoppingItemsPipe} from '../view-page/pipes/shopping-items.pipe';
import {Store, StoreModule} from '@ngrx/store';

describe('AddPageComponent', () => {
  let sut: AddPageComponent;
  let fixture: ComponentFixture<AddPageComponent>;
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
    fixture = TestBed.createComponent(AddPageComponent);
    sut = fixture.componentInstance;
  });

  describe('Test add-page component', () => {
    it('Initial form valid status === falce', () => {
      fixture.detectChanges();
      expect(sut.shoppingItemForm.valid).toBe(false);
    });
    it('with valid data  form valid status === true', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '123';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(sut.shoppingItemForm.valid).toBe(true);
    });
    it('with valid data and invalid amount valid status === false', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '99999999999999999999999999999';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(sut.shoppingItemForm.valid).toBe(false);
    });
    it('with valid data and invalid amount valid status === false', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = 'fghrthgfhtrhgfhtr';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(sut.shoppingItemForm.valid).toBe(false);
    });
    it('with valid data and invalid price valid status === false', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '123';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = 'dgffdgeregfdger';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(sut.shoppingItemForm.valid).toBe(false);
    });
    it('with valid data and invalid name valid status === false', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '123';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'rgoiuoerjhgoijfdoigjoierjgoijdoifjgoierjgoiejrguerhgudhfgiuheriughfdiuhgeruhgfdugrdu';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(sut.shoppingItemForm.valid).toBe(false);
    });
    it('form valid status === false if form has been cleared', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '123';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const resetButton: HTMLButtonElement = nativeElement.querySelector('.component-form__container__row--clean-btn');
      resetButton.click();
      fixture.detectChanges();
      expect(sut.shoppingItemForm.valid).toBe(false);
    });
    it('form reset clears amount', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '123';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const resetButton: HTMLButtonElement = nativeElement.querySelector('.component-form__container__row--clean-btn');
      resetButton.click();
      fixture.detectChanges();
      expect(sut.shoppingItemForm.value.amount).toEqual(null);
    });
    it('form reset clears price', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '123';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const resetButton: HTMLButtonElement = nativeElement.querySelector('.component-form__container__row--clean-btn');
      resetButton.click();
      fixture.detectChanges();
      expect(sut.shoppingItemForm.value.cost).toEqual(null);
    });
    it('form reset clears name', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '123';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const resetButton: HTMLButtonElement = nativeElement.querySelector('.component-form__container__row--clean-btn');
      resetButton.click();
      fixture.detectChanges();
      expect(sut.shoppingItemForm.value.name).toEqual(null);
    });
    it('form reset clears comment', () => {
      fixture.detectChanges();
      const nativeElement: HTMLElement = fixture.nativeElement;
      const amount: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--amount');
      amount.value = '123';
      amount.dispatchEvent(new Event('input'));
      const price: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--price');
      price.value = '123';
      price.dispatchEvent(new Event('input'));
      const name: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--title');
      name.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      const comment: HTMLInputElement = nativeElement.querySelector('.component-form__container__row--comment');
      comment.value = 'Pivo';
      name.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const resetButton: HTMLButtonElement = nativeElement.querySelector('.component-form__container__row--clean-btn');
      resetButton.click();
      fixture.detectChanges();
      expect(sut.shoppingItemForm.value.comment).toEqual(null);
    });
  });
});
