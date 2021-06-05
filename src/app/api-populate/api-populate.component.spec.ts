import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPopulateComponent } from './api-populate.component';

describe('ApiPopulateComponent', () => {
  let component: ApiPopulateComponent;
  let fixture: ComponentFixture<ApiPopulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPopulateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPopulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
