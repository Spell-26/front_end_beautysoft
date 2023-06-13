import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardServicioComponent } from './contenido-card-servicio.component';

describe('ContenidoCardServicioComponent', () => {
  let component: ContenidoCardServicioComponent;
  let fixture: ComponentFixture<ContenidoCardServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoCardServicioComponent]
    });
    fixture = TestBed.createComponent(ContenidoCardServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
