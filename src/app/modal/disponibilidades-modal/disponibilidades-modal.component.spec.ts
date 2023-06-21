import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadesModalComponent } from './disponibilidades-modal.component';

describe('DisponibilidadesModalComponent', () => {
  let component: DisponibilidadesModalComponent;
  let fixture: ComponentFixture<DisponibilidadesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisponibilidadesModalComponent]
    });
    fixture = TestBed.createComponent(DisponibilidadesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
