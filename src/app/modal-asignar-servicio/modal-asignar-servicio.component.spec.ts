import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsignarServicioComponent } from './modal-asignar-servicio.component';

describe('ModalAsignarServicioComponent', () => {
  let component: ModalAsignarServicioComponent;
  let fixture: ComponentFixture<ModalAsignarServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAsignarServicioComponent]
    });
    fixture = TestBed.createComponent(ModalAsignarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
