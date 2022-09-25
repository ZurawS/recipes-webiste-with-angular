/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeResolverService } from './recipe-resolver.service';

describe('Service: RecipeResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeResolverService]
    });
  });

  it('should ...', inject([RecipeResolverService], (service: RecipeResolverService) => {
    expect(service).toBeTruthy();
  }));
});
