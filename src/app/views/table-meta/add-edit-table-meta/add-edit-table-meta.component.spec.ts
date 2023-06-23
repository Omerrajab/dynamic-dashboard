import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTableMetaComponent } from './add-edit-table-meta.component';

describe('AddEditTableMetaComponent', () => {
  let component: AddEditTableMetaComponent;
  let fixture: ComponentFixture<AddEditTableMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTableMetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTableMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
