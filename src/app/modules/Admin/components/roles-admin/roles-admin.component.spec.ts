import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAdminComponent } from './roles-admin.component';

describe('RolesAdminComponent', () => {
  let component: RolesAdminComponent;
  let fixture: ComponentFixture<RolesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesAdminComponent]
    });
    fixture = TestBed.createComponent(RolesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
