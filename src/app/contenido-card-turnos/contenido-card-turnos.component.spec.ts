import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardTurnosComponent } from './contenido-card-turnos.component';

describe('ContenidoCardTurnosComponent', () => {
  let component: ContenidoCardTurnosComponent;
  let fixture: ComponentFixture<ContenidoCardTurnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoCardTurnosComponent]
    });
    fixture = TestBed.createComponent(ContenidoCardTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
