import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHome3Component } from './booking-home3.component';

describe('BookingHome3Component', () => {
  let component: BookingHome3Component;
  let fixture: ComponentFixture<BookingHome3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingHome3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
