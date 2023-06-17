import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilistaComponent } from './estilista.component';

describe('EstilistaComponent', () => {
  let component: EstilistaComponent;
  let fixture: ComponentFixture<EstilistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstilistaComponent]
    });
    fixture = TestBed.createComponent(EstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
