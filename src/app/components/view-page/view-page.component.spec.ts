import { AppMenuComponent } from '../app-menu/app-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router} from "@angular/router";
import { Location } from "@angular/common";
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { routes } from '../../app-routing.module';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { ViewPageComponent } from './view-page.component';
import { AddPageComponent } from '../add-page/add-page.component';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';
import { ShoppingItemService } from '../shopping-item/shopping-item.service';
import { ShoppingListMenuItemComponent } from '../shopping-list-menu/shopping-list-menu-item.component';
import { NotifierModule } from 'angular-notifier';

describe('AppMenuComponent', () => {
    let sut: ViewPageComponent;
    let fixture: ComponentFixture<ViewPageComponent>;
    let router: Router;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes(routes), FormsModule, ReactiveFormsModule, NotifierModule ],
            declarations: [ AppMenuComponent, WelcomePageComponent, ViewPageComponent, AddPageComponent, ShoppingItemComponent, ShoppingListMenuItemComponent ],
            providers: [ ShoppingItemService ]
        })
        router = TestBed.get(Router);
        location = TestBed.get(Location); 
        fixture = TestBed.createComponent( ViewPageComponent );
        sut = fixture.componentInstance;
    });

    describe('Test view-page component', () => {
        it('Component renders with a text Shopping List', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const label: HTMLSpanElement = nativeElement.querySelector('.shopping-list__header--text');
            expect(label.textContent.trim()).toBe('Shopping List');
        })
        it('Component renders shopping items', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const items: NodeListOf<any> = nativeElement.querySelectorAll('mw-shopping-item');
            expect(items.length).toBeGreaterThan(1);
        })
        it('Component renders view page menu', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const items: NodeListOf<any> = nativeElement.querySelectorAll('mw-menu-item');
            expect(items.length).toBe(1);
        })
        it('Active menu button is initially active', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const activeMenuButton: HTMLDivElement = nativeElement.querySelector('.menu-section--selected');
            expect(activeMenuButton.textContent).toContain('active');
        })
        it('After selecting completed menu section load completed items', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
            menuButtons[1].click();
            expect(sut.shoppingItems[0].status).toBe('completed');
        })
        it('After selecting completed menu section this section become active', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const menuButtons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.menu-section__option');
            menuButtons[1].click();
            fixture.detectChanges();
            const activeMenuButton: HTMLDivElement = nativeElement.querySelector('.menu-section--selected');
            expect(activeMenuButton.textContent).toContain('completed');
        })
        it('After clicking on delete item button - item moves to completed items list', () => {
            fixture.detectChanges();
            const initialNumberOfItems = sut.shoppingItems.length;
            const nativeElement: HTMLElement = fixture.nativeElement;
            const deleteeButon: HTMLDivElement = nativeElement.querySelector('.shopping-item__header--delete-btn');
            deleteeButon.click();
            fixture.detectChanges();
            expect(initialNumberOfItems).toBeGreaterThan(sut.shoppingItems.length);
        })
        it('After clicking on complete item button - item remove from active items list', () => {
            fixture.detectChanges();
            const initialNumberOfItems = sut.shoppingItems.length;
            const nativeElement: HTMLElement = fixture.nativeElement;
            const completeButton: HTMLDivElement = nativeElement.querySelector('.shopping-item__footer--done');
            completeButton.click();
            fixture.detectChanges();
            expect(initialNumberOfItems).toBeGreaterThan(sut.shoppingItems.length);
        })
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
        })
    })
}) 