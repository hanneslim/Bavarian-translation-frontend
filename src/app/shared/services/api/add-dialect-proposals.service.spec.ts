import { TestBed } from '@angular/core/testing';

import { AddDialectProposalsService } from './add-dialect-proposals.service';

describe('AddDialectProposalsService', () => {
  let service: AddDialectProposalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDialectProposalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
