import { TestBed } from '@angular/core/testing';

import { AzureAdService } from './services/azure-ad.service';

describe('AzureAdService', () => {
  let service: AzureAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
