import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fixed1Component } from './fixed1.component';

describe('Fixed1Component', () => {
  let component: Fixed1Component;
  let fixture: ComponentFixture<Fixed1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fixed1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fixed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
