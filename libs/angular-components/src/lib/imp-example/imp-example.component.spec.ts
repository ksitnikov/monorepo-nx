import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpExampleComponent } from './imp-example.component';

describe('ImpExampleComponent', () => {
  let component: ImpExampleComponent;
  let fixture: ComponentFixture<ImpExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
