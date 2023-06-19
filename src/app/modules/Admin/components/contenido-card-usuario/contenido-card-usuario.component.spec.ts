import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardUsuarioComponent } from './contenido-card-usuario.component';

describe('ContenidoCardUsuarioComponent', () => {
  let component: ContenidoCardUsuarioComponent;
  let fixture: ComponentFixture<ContenidoCardUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoCardUsuarioComponent]
    });
    fixture = TestBed.createComponent(ContenidoCardUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
