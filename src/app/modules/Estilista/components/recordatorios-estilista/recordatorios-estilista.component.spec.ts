import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatoriosEstilistaComponent } from './recordatorios-estilista.component';

describe('RecordatoriosEstilistaComponent', () => {
  let component: RecordatoriosEstilistaComponent;
  let fixture: ComponentFixture<RecordatoriosEstilistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordatoriosEstilistaComponent]
    });
    fixture = TestBed.createComponent(RecordatoriosEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
