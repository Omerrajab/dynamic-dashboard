import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditTableMetaComponent } from './add-edit-table-meta/add-edit-table-meta.component';
import { ListTableMetaComponent } from './list-table-meta/list-table-meta.component';

const routes: Routes = [
  {
    path: '',
    component: ListTableMetaComponent,
    data: {
      title: 'TableMeta',
    },
  },
  {
    path: 'add',
    component: AddEditTableMetaComponent,
    data: {
      title: 'Add TableMeta',
    },
  },
  {
    path: 'edit/:id',
    component: AddEditTableMetaComponent,
    data: {
      title: 'Edit TableMeta',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableMetaRoutingModule { }
