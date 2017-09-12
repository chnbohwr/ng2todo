import { TestBed, inject } from '@angular/core/testing';

import { HymanService } from './hyman.service';

describe('HymanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HymanService]
    });
  });

  it('should be created', inject([HymanService], (service: HymanService) => {
    expect(service).toBeTruthy();
  }));
});
