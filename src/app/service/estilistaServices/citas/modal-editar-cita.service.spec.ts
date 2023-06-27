import { TestBed } from '@angular/core/testing';

import { ModalEditarCitaService } from './modal-editar-cita.service';

describe('ModalEditarCitaService', () => {
  let service: ModalEditarCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalEditarCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
