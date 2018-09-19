import { TestBed, inject } from '@angular/core/testing';

import { AveService } from './ave.service';

describe('AveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AveService]
    });
  });

  it('should be created', inject([AveService], (service: AveService) => {
    expect(service).toBeTruthy();
  }));
});
