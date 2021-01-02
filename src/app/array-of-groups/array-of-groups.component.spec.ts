import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfGroupsComponent } from './array-of-groups.component';

describe('ArrayOfGroupsComponent', () => {
  let component: ArrayOfGroupsComponent;
  let fixture: ComponentFixture<ArrayOfGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayOfGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayOfGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
