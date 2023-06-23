import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BadgeModule, CardModule, GridModule } from '@coreui/angular'
import { ChartjsModule } from '@coreui/angular-chartjs'

import { ChartsComponent } from './charts.component'
import { ChartsRoutingModule } from './charts-routing.module'
import { DocsComponentsModule } from '@docs-components/docs-components.module'
import { GaugeChartsComponent } from './gauge-charts/gauge-charts.component'
import { NgApexchartsModule } from 'ng-apexcharts'
import { BarChartComponent } from './bar-chart/bar-chart.component'
import { LineChartComponent } from './line-chart/line-chart.component'
import { PieChartComponent } from './pie-chart/pie-chart.component'

@NgModule({
  declarations: [
    ChartsComponent,
    GaugeChartsComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule,
    NgApexchartsModule,
  ],
  exports: [
    ChartsComponent,
    GaugeChartsComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
})
export class ChartsModule {}
