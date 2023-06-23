import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualization-preview',
  templateUrl: './visualization-preview.component.html',
  styleUrls: ['./visualization-preview.component.scss']
})
export class VisualizationPreviewComponent implements OnInit {
  @Input() type: any
  constructor() { }

  ngOnInit(): void {
  }

}
