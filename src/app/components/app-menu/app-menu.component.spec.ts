import { AppMenuComponent } from './app-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router} from "@angular/router";
import {Location} from "@angular/common";
import { ComponentFixture, TestBed, fakeAsync, tick,} from '@angular/core/testing';
import { routes } from '../../app-routing.module';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { ViewPageComponent } from '../view-page/view-page.component';
import { AddPageComponent } from '../add-page/add-page.component';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';
import { ShoppingItemService } from '../shopping-item/shopping-item.service';
import { ShoppingListMenuItemComponent } from '../shopping-list-menu/shopping-list-menu-item.component';

describe('AppMenuComponent', () => {
    let sut: AppMenuComponent;
    let fixture: ComponentFixture<AppMenuComponent>;
    let router: Router;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes(routes), FormsModule, ReactiveFormsModule ],
            declarations: [ AppMenuComponent, WelcomePageComponent, ViewPageComponent, AddPageComponent, ShoppingItemComponent, ShoppingListMenuItemComponent ],
            providers: [ ShoppingItemService ]
        })
        router = TestBed.get(Router);
        location = TestBed.get(Location); 
        fixture = TestBed.createComponent( AppMenuComponent );
        sut = fixture.componentInstance;
    });

    describe('Test app-menu component', () => {
        it('Initial state for menu === false', () => {
            fixture.detectChanges();
            expect(sut.menuState).toBe(false);
        })
        it('menu state after clicking on button === true', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const menuButton: HTMLLabelElement = nativeElement.querySelector('.navigation__button');
            menuButton.click();
            expect(sut.menuState).toBe(true);
        })
        it('Menu containes only 2 items', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const links: NodeListOf<HTMLAnchorElement> = nativeElement.querySelectorAll('a');
            expect(links.length).toBe(2);
        })
        it('If currentRouter === /view -> selected class has been added to the first link', () => {
            sut.currentRoute = '/view';
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const selectedLink: HTMLAnchorElement = nativeElement.querySelector('.navigation__link--selected');
            expect(selectedLink.textContent).toBe('View list');
        })
        it('If currentRouter === /add -> selected class has been added to the second link', () => {
            sut.currentRoute = '/add';
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const selectedLink: HTMLAnchorElement = nativeElement.querySelector('.navigation__link--selected');
            expect(selectedLink.textContent).toBe('Add items');
        })
        it('If currentRouter === /view -> location chages to /view', fakeAsync(() => {
            fixture.detectChanges();
            router.navigate(['/view']);
            tick();
            expect(location.path()).toBe('/view');
        }))
        it('If currentRouter === /add -> location chages to /add', fakeAsync(() => {
            fixture.detectChanges();
            router.navigate(['/add']);
            tick();
            expect(location.path()).toBe('/add');
        }))
    })
})