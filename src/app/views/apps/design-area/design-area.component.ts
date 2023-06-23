import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-design-area',
  templateUrl: './design-area.component.html',
  styleUrls: ['./design-area.component.scss'],
})
export class DesignAreaComponent implements OnInit {
  @Input() data: any
  selectedItem: any = {}
  constructor() {}

  ngOnInit(): void {}

  copyItem(item: any) {
    this.data.push({ ...item })
  }

  editItem(item: any) {
    this.selectedItem = item
  }
}
