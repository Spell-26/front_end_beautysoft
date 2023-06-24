import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardEstilistaComponent } from './contenido-card-estilista.component';

describe('ContenidoCardEstilistaComponent', () => {
  let component: ContenidoCardEstilistaComponent;
  let fixture: ComponentFixture<ContenidoCardEstilistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoCardEstilistaComponent]
    });
    fixture = TestBed.createComponent(ContenidoCardEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
