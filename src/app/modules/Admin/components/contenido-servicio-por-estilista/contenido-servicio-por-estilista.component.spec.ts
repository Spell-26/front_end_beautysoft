import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoServicioPorEstilistaComponent } from './contenido-servicio-por-estilista.component';

describe('ContenidoServicioPorEstilistaComponent', () => {
  let component: ContenidoServicioPorEstilistaComponent;
  let fixture: ComponentFixture<ContenidoServicioPorEstilistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoServicioPorEstilistaComponent]
    });
    fixture = TestBed.createComponent(ContenidoServicioPorEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
