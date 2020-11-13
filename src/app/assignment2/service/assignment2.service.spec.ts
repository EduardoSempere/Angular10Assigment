import { TestBed } from '@angular/core/testing';

import { Assignment2Service } from './assignment2.service';

describe('Assignment2Service', () => {
  let service: Assignment2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Assignment2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
