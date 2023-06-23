import { TestBed } from '@angular/core/testing';

import { TableMetaService } from './table-meta.service';

describe('TableMetaServiceService', () => {
  let service: TableMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
