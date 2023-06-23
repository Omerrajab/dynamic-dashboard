import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-edit-visualization',
  templateUrl: './add-edit-visualization.component.html',
  styleUrls: ['./add-edit-visualization.component.scss']
})
export class AddEditVisualizationComponent implements OnInit {

  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  visualization: any = {
    columns:[] //selected columns from query 
  }
  ngOnInit(): void {
  }
  onSubmit() {

  }
  saveVisualization() {
    throw new Error('Method not implemented.');
  }

  onVisualizationSelect(event:any) {
    const message = this.visualization.type;
    console.log(message)
    this.onSelect.emit(message);
  }
}