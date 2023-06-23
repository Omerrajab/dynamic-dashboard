import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-app-designer',
  templateUrl: './app-designer.component.html',
  styleUrls: ['./app-designer.component.scss'],
})
export class AppDesignerComponent implements OnInit {

  widgets: any = ['first', 'second']
  public visible = false;


  constructor() { }

  ngOnInit(): void {

  }
  toggleLiveDemo() {
    this.visible = !this.visible;
  }
  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  drop(event: any) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  }

  addWidget(){
    this.visible = !this.visible;
    this.widgets.push('third')
  }
}
