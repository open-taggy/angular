import { TestBed } from '@angular/core/testing';

import { TaggyService } from './taggy.service';

describe('TaggyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaggyService = TestBed.get(TaggyService);
    expect(service).toBeTruthy();
  });
});
