import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnServicioPorEstilistaComponent } from './btn-servicio-por-estilista.component';

describe('BtnServicioPorEstilistaComponent', () => {
  let component: BtnServicioPorEstilistaComponent;
  let fixture: ComponentFixture<BtnServicioPorEstilistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnServicioPorEstilistaComponent]
    });
    fixture = TestBed.createComponent(BtnServicioPorEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
