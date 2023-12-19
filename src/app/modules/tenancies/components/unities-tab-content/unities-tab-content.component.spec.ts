import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitiesTabContentComponent } from './unities-tab-content.component';

describe('UnitiesTabContentComponent', () => {
  let component: UnitiesTabContentComponent;
  let fixture: ComponentFixture<UnitiesTabContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitiesTabContentComponent]
    });
    fixture = TestBed.createComponent(UnitiesTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
