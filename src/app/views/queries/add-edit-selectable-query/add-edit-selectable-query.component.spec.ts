import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSelectableQueryComponent } from './add-edit-selectable-query.component';

describe('AddEditSelectableQueryComponent', () => {
  let component: AddEditSelectableQueryComponent;
  let fixture: ComponentFixture<AddEditSelectableQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSelectableQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSelectableQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
