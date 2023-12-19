import { TestBed } from '@angular/core/testing';

import { TenanciesService } from './tenancies.service';

describe('TenanciesService', () => {
  let service: TenanciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenanciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
