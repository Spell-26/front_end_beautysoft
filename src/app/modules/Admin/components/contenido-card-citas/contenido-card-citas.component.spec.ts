import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardCitasComponent } from './contenido-card-citas.component';

describe('ContenidoCardCitasComponent', () => {
  let component: ContenidoCardCitasComponent;
  let fixture: ComponentFixture<ContenidoCardCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoCardCitasComponent]
    });
    fixture = TestBed.createComponent(ContenidoCardCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
