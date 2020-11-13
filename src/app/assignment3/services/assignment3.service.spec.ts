import { TestBed } from '@angular/core/testing';

import { Assignment3Service } from './assignment3.service';

describe('Assignment3Service', () => {
  let service: Assignment3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Assignment3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
