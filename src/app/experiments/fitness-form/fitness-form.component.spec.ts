import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessFormComponent } from './fitness-form.component';

describe('FitnessFormComponent', () => {
  let component: FitnessFormComponent;
  let fixture: ComponentFixture<FitnessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
