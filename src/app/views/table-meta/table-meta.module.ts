import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableMetaRoutingModule } from './table-meta-routing.module';
import { AddEditTableMetaComponent } from './add-edit-table-meta/add-edit-table-meta.component';
import { ListTableMetaComponent } from './list-table-meta/list-table-meta.component';
import { ButtonModule, CardModule, GridModule, NavModule, TableModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEditTableMetaComponent,
    ListTableMetaComponent
  ],
  imports: [
    CommonModule,
    TableMetaRoutingModule,
    GridModule,
    CardModule,
    TableModule,
    NavModule,
    ButtonModule,
    FormsModule
  ]
})
export class TableMetaModule { }
