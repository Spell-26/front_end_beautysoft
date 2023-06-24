import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPorEstilistaAdminComponent } from './servicio-por-estilista-admin.component';

describe('ServicioPorEstilistaAdminComponent', () => {
  let component: ServicioPorEstilistaAdminComponent;
  let fixture: ComponentFixture<ServicioPorEstilistaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicioPorEstilistaAdminComponent]
    });
    fixture = TestBed.createComponent(ServicioPorEstilistaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
