import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTenancyUnityDialogComponent } from './delete-tenancy-unity-dialog.component';

describe('DeleteTenancyDialogComponent', () => {
  let component: DeleteTenancyUnityDialogComponent;
  let fixture: ComponentFixture<DeleteTenancyUnityDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTenancyUnityDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteTenancyUnityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
