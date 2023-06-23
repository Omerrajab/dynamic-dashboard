import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AddEditAppComponent } from './add-edit-app/add-edit-app.component';
import { ListAppsComponent } from './list-apps/list-apps.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, NavModule, TabsModule,TableModule, ButtonGroupModule, DropdownModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { AppDesignerComponent } from './app-designer/app-designer.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { ChartsModule } from '../charts/charts.module';
import { DesignAreaComponent } from './design-area/design-area.component';

import {DragDropModule} from '@angular/cdk/drag-drop';

// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [
    AddEditAppComponent,
    ListAppsComponent,
    AppDesignerComponent,
    DesignAreaComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    CardModule,
    GridModule,
    ButtonModule,
    FormModule,
    FormsModule,
    NavModule, 
    TabsModule,
    IconModule,
    TableModule,
    ModalModule,
    ChartjsModule,
    ChartsModule,
    ButtonGroupModule,
    DragDropModule,
    DropdownModule
  ]
})
export class generateAppsModule { }
