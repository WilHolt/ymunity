import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenancyUnityCardComponent } from './tenancy-unity-card.component';

describe('TenancyUnityCardComponent', () => {
  let component: TenancyUnityCardComponent;
  let fixture: ComponentFixture<TenancyUnityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenancyUnityCardComponent]
    });
    fixture = TestBed.createComponent(TenancyUnityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
