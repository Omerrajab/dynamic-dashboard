import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { AddEditModulesComponent } from './add-edit-modules/add-edit-modules.component';
import { ListModulesComponent } from './list-modules/list-modules.component';import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  SharedModule,
  TableModule,
  TabsModule,
  TooltipModule
} from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEditModulesComponent,
    ListModulesComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
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
    FormsModule
  ]
})
export class selectedModulesModule { }
