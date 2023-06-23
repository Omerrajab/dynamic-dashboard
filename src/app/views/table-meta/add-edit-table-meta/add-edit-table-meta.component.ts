import { Component, OnInit } from '@angular/core';
import { cilReload, cilSave, cilMediaPlay } from '@coreui/icons';
import { Location } from '@angular/common';
import { TableMetaService } from '../../../services/tableMeta/table-meta.service';
import { AlertService } from '../../../services/alert/alert.service';
@Component({
  selector: 'app-add-edit-table-meta',
  templateUrl: './add-edit-table-meta.component.html',
  styleUrls: ['./add-edit-table-meta.component.scss']
})
export class AddEditTableMetaComponent implements OnInit {
  icons = { cilReload, cilSave, cilMediaPlay }
  formData = {
    title: '',
    description: '',
    key: ''
  };
  constructor(private location: Location, private tableMetaService: TableMetaService, private alertService: AlertService) { }

  ngOnInit(): void {

  }
  saveRecord() {

  }

  onCancel() {
    this.location.back();
  }
  onSubmit(form: any) {
    if (form.valid) {
      // Perform your desired action with the form data

      this.tableMetaService.addTableMeta(this.formData).subscribe({
        next: () => {
          this.formData = { title: '', description: '', key: '' }
          this.alertService.showSuccessAlert()
        }, error: (err) => {
          console.log(err)
          this.alertService.showErrorAlert()
        }
      })
    
    }
  }
}


