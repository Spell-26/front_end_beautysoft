import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardRolComponent } from './contenido-card-rol.component';

describe('ContenidoCardRolComponent', () => {
  let component: ContenidoCardRolComponent;
  let fixture: ComponentFixture<ContenidoCardRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoCardRolComponent]
    });
    fixture = TestBed.createComponent(ContenidoCardRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
