import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedispComponent } from './issuedisp.component';

describe('IssuedispComponent', () => {
  let component: IssuedispComponent;
  let fixture: ComponentFixture<IssuedispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
