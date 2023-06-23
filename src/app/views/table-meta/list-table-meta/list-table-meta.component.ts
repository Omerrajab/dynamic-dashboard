import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TableMetaService } from 'src/app/services/tableMeta/table-meta.service';

@Component({
  selector: 'app-list-table-meta',
  templateUrl: './list-table-meta.component.html',
  styleUrls: ['./list-table-meta.component.scss']
})
export class ListTableMetaComponent implements OnInit {
  tableData: any;
  dtOptions = {
    draw: 0,
    start: 0,
    length: 100
  }
  constructor(private tableMetaService: TableMetaService,private alertService:AlertService) { }

  ngOnInit(): void {
    this.getAllTableMeta()
  }
  getAllTableMeta() {
    this.tableMetaService.getTableMetaList(this.dtOptions).subscribe({
      next: (result) => {
        this.tableData=result.data
      }, error: (err) => {
        console.log(err)
        this.alertService.showErrorAlert()
      }
    })
  }
}
