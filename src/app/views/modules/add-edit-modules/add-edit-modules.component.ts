import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-modules',
  templateUrl: './add-edit-modules.component.html',
  styleUrls: ['./add-edit-modules.component.scss']
})
export class AddEditModulesComponent implements OnInit {
  collctions: any = [
    {
      id: 1,
      title: 'property',
      columns: [
        { title: 'name', type: 'string' },
        { title: 'owner', type: 'string' },
        { title: 'location', type: 'string' },
        { title: 'rooms', type: 'number' },
      ],
    },
    {
      id: 2,
      title: 'ticket',
      columns: [
        { title: 'name', type: 'string' },
        { title: 'owner', type: 'string' },
        { title: 'location', type: 'string' },
      ],
    },
  ]
  operations: any = {
    number: ['=', '>', '<', '<=', '>=', 'Contain', 'Does Not Contain'],
    string: [
      'Contains Words',
      'Does Not Contain Words',
      'Is Empty',
      'Is Not Empty',
    ],
  }
  disabledOptions = ['Is Empty', 'Is Not Empty']
  queries: any = [{ operation: '', operations: [] }]
  selectedCollection: any = []
  rawQuery = ''
  queriesToSave: any = []
  preview: any = ''
  constructor() {}

  ngOnInit(): void {
    this.selectedCollection = this.collctions[0].columns
  }

  selectCollection(collectionId: string) {
    console.log(collectionId)
    this.selectedCollection = this.collctions.find(
      (x: any) => x.id.toString() == collectionId,
    )?.columns
  }

  selectColumn(col: any, index: number) {
    let type = this.selectedCollection.find((x: any) => x.title == col).type
    this.queries[index].operations = this.operations[type]
  }
  setQuery(operation: string, index: number) {
    if (operation === 'add') {
      this.queries.push({ operation: '', operations: [] })
    } else if (operation == 'remove' && this.queries.length > 1) {
      this.queries.splice(index, 1)
    }
  }

  addQuery() {
    this.queriesToSave = []
    for (let i = 0; i < this.queries.length; i++) {
      if (this.queries.length) {
        let query = this.queries[i]
        let key = '$' + [query.type]
        if (i == 0) {
          this.queriesToSave.push({
            $match: {
              [key]: [{ [query.field]: query.value }],
            },
          })
        } else {
          if (this.queriesToSave[0].$match[key]) {
            this.queriesToSave[0].$match[key].push([
              { [query.field]: query.value ? query.value : '' },
            ])
          } else {
            this.queriesToSave[0].$match[key] = [
              { [query.field]: query.value ? query.value : '' },
            ]
          }
        }
      }
      console.log(this.queriesToSave)
    }
  }
  setPreview() {
    this.preview = JSON.stringify(this.queriesToSave) || this.rawQuery.toString()
  }
}
