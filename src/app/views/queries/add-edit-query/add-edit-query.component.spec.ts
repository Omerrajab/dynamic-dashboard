import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQueryComponent } from './add-edit-query.component';

describe('AddEditQueryComponent', () => {
  let component: AddEditQueryComponent;
  let fixture: ComponentFixture<AddEditQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
