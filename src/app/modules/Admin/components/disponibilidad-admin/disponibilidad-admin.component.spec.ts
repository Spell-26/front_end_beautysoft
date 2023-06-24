import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadAdminComponent } from './disponibilidad-admin.component';

describe('DisponibilidadAdminComponent', () => {
  let component: DisponibilidadAdminComponent;
  let fixture: ComponentFixture<DisponibilidadAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisponibilidadAdminComponent]
    });
    fixture = TestBed.createComponent(DisponibilidadAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
