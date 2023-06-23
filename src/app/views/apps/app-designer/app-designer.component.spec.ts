import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDesignerComponent } from './app-designer.component';

describe('AppDesignerComponent', () => {
  let component: AppDesignerComponent;
  let fixture: ComponentFixture<AppDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDesignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
