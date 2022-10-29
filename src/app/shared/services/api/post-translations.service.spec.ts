import { TestBed } from '@angular/core/testing';

import { PostTranslationsService } from './post-translations.service';

describe('PostTranslationsService', () => {
  let service: PostTranslationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTranslationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
