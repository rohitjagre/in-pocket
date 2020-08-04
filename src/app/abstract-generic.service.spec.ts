import { TestBed } from '@angular/core/testing';

import { AbstractGenericService } from './abstract-generic.service';

describe('AbstractGenericService', () => {
  let service: AbstractGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
