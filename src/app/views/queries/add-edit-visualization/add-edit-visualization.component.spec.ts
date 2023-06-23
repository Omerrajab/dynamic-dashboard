import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVisualizationComponent } from './add-edit-visualization.component';

describe('AddEditVisualizationComponent', () => {
  let component: AddEditVisualizationComponent;
  let fixture: ComponentFixture<AddEditVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVisualizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
