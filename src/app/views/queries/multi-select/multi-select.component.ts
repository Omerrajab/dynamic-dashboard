import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  dropdownList:any = [];
  selectedItems:any  = [];
  dropdownSettings:any  = {};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'power_consumption' },
      { item_id: 2, item_text: 'fuel_consumption' },
      { item_id: 3, item_text: 'emission' },
      { item_id: 4, item_text: 'production' },
      { item_id: 5, item_text: 'time_consumption' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'power_consumption' },
      { item_id: 4, item_text: 'fuel_consumption' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}