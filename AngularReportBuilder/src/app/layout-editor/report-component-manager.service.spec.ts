import { TestBed } from '@angular/core/testing';

import { ReportComponentManagerService } from './report-component-manager.service';

describe('ReportComponentManagerService', () => {
  let service: ReportComponentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportComponentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
