import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPinctureComponent } from './view-pincture.component';

describe('ViewPinctureComponent', () => {
  let component: ViewPinctureComponent;
  let fixture: ComponentFixture<ViewPinctureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPinctureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPinctureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
