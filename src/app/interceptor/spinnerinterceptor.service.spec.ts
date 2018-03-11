import { TestBed, inject } from '@angular/core/testing';

import { SpinnerinterceptorService } from './spinnerinterceptor.service';

describe('SpinnerinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerinterceptorService]
    });
  });

  it('should be created', inject([SpinnerinterceptorService], (service: SpinnerinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
