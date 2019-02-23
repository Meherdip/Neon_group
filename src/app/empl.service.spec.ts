import { TestBed } from '@angular/core/testing';

import { EmplService } from './empl.service';

describe('EmplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmplService = TestBed.get(EmplService);
    expect(service).toBeTruthy();
  });
});
