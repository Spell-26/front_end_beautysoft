import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilistaAdminComponent } from './estilista-admin.component';

describe('EstilistaAdminComponent', () => {
  let component: EstilistaAdminComponent;
  let fixture: ComponentFixture<EstilistaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstilistaAdminComponent]
    });
    fixture = TestBed.createComponent(EstilistaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
