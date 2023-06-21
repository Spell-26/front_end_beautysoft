import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPorEstilistaComponent } from './servicio-por-estilista.component';

describe('ServicioPorEstilistaComponent', () => {
  let component: ServicioPorEstilistaComponent;
  let fixture: ComponentFixture<ServicioPorEstilistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicioPorEstilistaComponent]
    });
    fixture = TestBed.createComponent(ServicioPorEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
