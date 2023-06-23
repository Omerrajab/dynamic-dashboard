import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddEditAppComponent } from './add-edit-app/add-edit-app.component'
import { ListAppsComponent } from './list-apps/list-apps.component'

const routes: Routes = [
  {
    path: '',
    component: ListAppsComponent,
  },
  {
    path:'add',
    component:AddEditAppComponent
  },
  {
    path:'edit/:id',
    component:AddEditAppComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsRoutingModule {}
