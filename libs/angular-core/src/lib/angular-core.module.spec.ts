import { async, TestBed } from '@angular/core/testing';
import { AngularCoreModule } from './angular-core.module';

describe('AngularCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularCoreModule).toBeDefined();
  });
});
