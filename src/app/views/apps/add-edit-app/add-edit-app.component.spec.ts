import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAppComponent } from './add-edit-app.component';

describe('AddEditAppComponent', () => {
  let component: AddEditAppComponent;
  let fixture: ComponentFixture<AddEditAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
