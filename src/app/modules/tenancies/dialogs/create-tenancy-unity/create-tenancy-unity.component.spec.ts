import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTenancyUnityComponent } from './create-tenancy-unity.component';

describe('CreateTenancyUnityComponent', () => {
  let component: CreateTenancyUnityComponent;
  let fixture: ComponentFixture<CreateTenancyUnityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTenancyUnityComponent]
    });
    fixture = TestBed.createComponent(CreateTenancyUnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
