import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepodataComponent } from './repodata.component';

describe('RepodataComponent', () => {
  let component: RepodataComponent;
  let fixture: ComponentFixture<RepodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
