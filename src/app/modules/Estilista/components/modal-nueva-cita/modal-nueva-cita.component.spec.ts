import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaCitaComponent } from './modal-nueva-cita.component';

describe('ModalNuevaCitaComponent', () => {
  let component: ModalNuevaCitaComponent;
  let fixture: ComponentFixture<ModalNuevaCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNuevaCitaComponent]
    });
    fixture = TestBed.createComponent(ModalNuevaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
