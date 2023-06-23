import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { ButtonModule, CardModule, DropdownModule, GridModule, SharedModule, WidgetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    SettingsListComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    GridModule,
    WidgetModule,
    IconModule,
    DropdownModule,
    SharedModule,
    ButtonModule,
    CardModule,
  ]
})
export class SettingsModule { }
