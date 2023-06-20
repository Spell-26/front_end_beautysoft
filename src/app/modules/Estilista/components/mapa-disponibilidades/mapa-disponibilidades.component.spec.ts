import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDisponibilidadesComponent } from './mapa-disponibilidades.component';

describe('MapaDisponibilidadesComponent', () => {
  let component: MapaDisponibilidadesComponent;
  let fixture: ComponentFixture<MapaDisponibilidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaDisponibilidadesComponent]
    });
    fixture = TestBed.createComponent(MapaDisponibilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
