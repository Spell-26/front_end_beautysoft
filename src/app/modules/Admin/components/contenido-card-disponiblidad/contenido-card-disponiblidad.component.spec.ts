import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardDisponiblidadComponent } from './contenido-card-disponiblidad.component';

describe('ContenidoCardDisponiblidadComponent', () => {
  let component: ContenidoCardDisponiblidadComponent;
  let fixture: ComponentFixture<ContenidoCardDisponiblidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoCardDisponiblidadComponent]
    });
    fixture = TestBed.createComponent(ContenidoCardDisponiblidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
