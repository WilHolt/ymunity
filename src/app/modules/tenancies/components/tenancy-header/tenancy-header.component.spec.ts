import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenancyHeaderComponent } from './tenancy-header.component';

describe('TenancyHeaderComponent', () => {
  let component: TenancyHeaderComponent;
  let fixture: ComponentFixture<TenancyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenancyHeaderComponent]
    });
    fixture = TestBed.createComponent(TenancyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
