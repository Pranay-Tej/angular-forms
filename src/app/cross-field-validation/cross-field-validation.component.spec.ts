import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidationComponent } from './cross-field-validation.component';

describe('CrossFieldValidationComponent', () => {
  let component: CrossFieldValidationComponent;
  let fixture: ComponentFixture<CrossFieldValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossFieldValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossFieldValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
