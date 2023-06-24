import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCentralEstilistaComponent } from './container-central-estilista.component';

describe('ContainerCentralEstilistaComponent', () => {
  let component: ContainerCentralEstilistaComponent;
  let fixture: ComponentFixture<ContainerCentralEstilistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerCentralEstilistaComponent]
    });
    fixture = TestBed.createComponent(ContainerCentralEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
