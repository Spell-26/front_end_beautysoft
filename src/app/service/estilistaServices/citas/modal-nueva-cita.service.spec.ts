import { TestBed } from '@angular/core/testing';

import { ModalNuevaCitaService } from './modal-nueva-cita.service';

describe('ModalNuevaCitaService', () => {
  let service: ModalNuevaCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalNuevaCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
