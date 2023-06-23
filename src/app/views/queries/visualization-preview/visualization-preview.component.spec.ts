import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationPreviewComponent } from './visualization-preview.component';

describe('VisualizationPreviewComponent', () => {
  let component: VisualizationPreviewComponent;
  let fixture: ComponentFixture<VisualizationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizationPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
