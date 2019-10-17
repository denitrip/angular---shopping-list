import { AppMenuComponent } from '../app-menu/app-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router} from "@angular/router";
import { Location } from "@angular/common";
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { routes } from '../../app-routing.module';
import { WelcomePageComponent } from './welcome-page.component';
import { ViewPageComponent } from '../view-page/view-page.component';
import { AddPageComponent } from '../add-page/add-page.component';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';
import { ShoppingItemService } from '../shopping-item/shopping-item.service';
import { ShoppingListMenuItemComponent } from '../shopping-list-menu/shopping-list-menu-item.component';

describe('AppMenuComponent', () => {
    let sut: WelcomePageComponent;
    let fixture: ComponentFixture<WelcomePageComponent>;
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
        fixture = TestBed.createComponent( WelcomePageComponent );
        sut = fixture.componentInstance;
    });

    describe('Test welcome-page component', () => {
        it('Component has two action buttons', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const buttons: NodeListOf<HTMLDivElement> = nativeElement.querySelectorAll('.button');
            expect(buttons.length).toBe(2);
        })
        it('View list button after click redirects to view page', fakeAsync(() => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const button: HTMLDivElement = nativeElement.querySelector('.main__options__btn-block--view');
            button.click();
            tick();
            expect(location.path()).toBe('/view'); 
        }))
        it('Edit list button after click redirects to add page', fakeAsync(() => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            const button: HTMLDivElement = nativeElement.querySelector('.main__options__btn-block--edit');
            button.click();
            tick();
            expect(location.path()).toBe('/add');
        }))
    })
}) 