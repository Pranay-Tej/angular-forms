import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfDatesComponent } from './array-of-dates.component';

describe('ArrayOfDatesComponent', () => {
  let component: ArrayOfDatesComponent;
  let fixture: ComponentFixture<ArrayOfDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayOfDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayOfDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
