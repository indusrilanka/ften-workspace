import { TestBed } from '@angular/core/testing';

import { FtenFrameworkService } from './ften-framework.service';

describe('FtenFrameworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FtenFrameworkService = TestBed.get(FtenFrameworkService);
    expect(service).toBeTruthy();
  });
});
