import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasCitasComponent } from './proximas-citas.component';

describe('ProximasCitasComponent', () => {
  let component: ProximasCitasComponent;
  let fixture: ComponentFixture<ProximasCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProximasCitasComponent]
    });
    fixture = TestBed.createComponent(ProximasCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
