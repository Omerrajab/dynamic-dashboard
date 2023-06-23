import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditQueryComponent } from './add-edit-query/add-edit-query.component';
import { ListQueriesComponent } from './list-queries/list-queries.component';

const routes: Routes = [
  {
    path: '',
    component: ListQueriesComponent,
    data: {
      title: 'Queries',
    },
  },
  {
    path: 'add',
    component: AddEditQueryComponent,
    data: {
      title: 'Add',
    },
  },
  {
    path: 'edit/:id',
    component: AddEditQueryComponent,
    data: {
      title: 'Edit',
    },
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueriesRoutingModule { }
