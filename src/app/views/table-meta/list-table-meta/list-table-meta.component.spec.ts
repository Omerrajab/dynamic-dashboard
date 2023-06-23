import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTableMetaComponent } from './list-table-meta.component';

describe('ListTableMetaComponent', () => {
  let component: ListTableMetaComponent;
  let fixture: ComponentFixture<ListTableMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTableMetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTableMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
