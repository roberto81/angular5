import { TestBed, inject } from '@angular/core/testing';

import { ContactdettailresolverService } from './contactdettailresolver.service';

describe('ContactdettailresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactdettailresolverService]
    });
  });

  it('should be created', inject([ContactdettailresolverService], (service: ContactdettailresolverService) => {
    expect(service).toBeTruthy();
  }));
});
