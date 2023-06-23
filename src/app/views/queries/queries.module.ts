import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueriesRoutingModule } from './queries-routing.module';
import { ListQueriesComponent } from './list-queries/list-queries.component';
import { AddEditQueryComponent } from './add-edit-query/add-edit-query.component';
import {
  AccordionModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  ModalModule,
  NavModule,
  SharedModule,
  TableModule,
  TabsModule,
  TooltipModule,
} from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';
import { AddEditVisualizationComponent } from './add-edit-visualization/add-edit-visualization.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddEditSelectableQueryComponent } from './add-edit-selectable-query/add-edit-selectable-query.component';
import { VisualizationPreviewComponent } from './visualization-preview/visualization-preview.component';
import { ChartsModule } from '../charts/charts.module';


@NgModule({
  declarations: [
    ListQueriesComponent,
    AddEditQueryComponent,
    AddEditVisualizationComponent,
    MultiSelectComponent,
    AddEditSelectableQueryComponent,
    VisualizationPreviewComponent
  ],
  imports: [
    QueriesRoutingModule,
    CommonModule,
    SharedModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    DocsComponentsModule,
    TableModule,
    NavModule, 
    TabsModule,
    IconModule,
    TooltipModule,
    FormsModule,
    AccordionModule,
    ModalModule,
    NgMultiSelectDropDownModule.forRoot(),
    ChartsModule
  ]
})
export class QueriesModule { }
