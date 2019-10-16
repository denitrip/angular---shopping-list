import { ShoppingListMenuItemComponent } from './shopping-list-menu-item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShoppingListMenuItemComponent', () => {
    let fixture: ComponentFixture<ShoppingListMenuItemComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ShoppingListMenuItemComponent ]
        })
        fixture = TestBed.createComponent( ShoppingListMenuItemComponent );
    });

    describe('Test shopping-list-menu-item component', () => {
        it('Generates shopping list menu container', () => {
            fixture.detectChanges();
            const nativeElement: HTMLElement = fixture.nativeElement;
            expect(!!nativeElement).toBe(true);
        })
    })
})