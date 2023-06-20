import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralEstilistaComponent } from './menu-lateral-estilista.component';

describe('MenuLateralEstilistaComponent', () => {
  let component: MenuLateralEstilistaComponent;
  let fixture: ComponentFixture<MenuLateralEstilistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLateralEstilistaComponent]
    });
    fixture = TestBed.createComponent(MenuLateralEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
