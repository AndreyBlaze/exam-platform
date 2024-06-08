import { TestBed } from '@angular/core/testing';

import { DemoTestsService } from './demo-tests.service';

describe('DemoTestsService', () => {
  let service: DemoTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
