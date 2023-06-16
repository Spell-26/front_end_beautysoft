import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardClientesComponent } from './contenido-card-clientes.component';

describe('ContenidoCardClientesComponent', () => {
  let component: ContenidoCardClientesComponent;
  let fixture: ComponentFixture<ContenidoCardClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoCardClientesComponent]
    });
    fixture = TestBed.createComponent(ContenidoCardClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
