import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosModalComponent } from './servicios-modal.component';

describe('ServiciosModalComponent', () => {
  let component: ServiciosModalComponent;
  let fixture: ComponentFixture<ServiciosModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosModalComponent]
    });
    fixture = TestBed.createComponent(ServiciosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
