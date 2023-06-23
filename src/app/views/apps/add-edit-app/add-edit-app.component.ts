import { Component, OnInit } from '@angular/core'
import { iconSubset, IconSubset } from 'src/app/icons/icon-subset'

@Component({
  selector: 'app-add-edit-app',
  templateUrl: './add-edit-app.component.html',
  styleUrls: ['./add-edit-app.component.scss'],
})
export class AddEditAppComponent implements OnInit {
  next:boolean=true;
  modules: any = [
    {
      id: 1,
      title: 'Substation',
      icon: '',
    },
    {
      id: 1,
      title: 'Equipment',
      icon: '',
    },
  ]
  appModules: any = [
    {
      title: '',
      icon: '',
      module: '',
    },
  ]
  public visible = false
  public iconSubset: any = iconSubset
  customStylesValidated = false
  icons: any = []
  constructor() {}

  ngOnInit(): void {
    this.icons = Object.keys(IconSubset)
  }
  cancel() {}
  onSubmit() {
    this.customStylesValidated = true
    console.log('Submit... 1')
  }

  toggleLiveDemo() {
    this.visible = !this.visible
  }

  handleLiveDemoChange(event: any) {
    this.visible = event
  }

  setModule(operation: string, index: number) {}
  navigate(){
    this.next=!this.next;
  }
}
