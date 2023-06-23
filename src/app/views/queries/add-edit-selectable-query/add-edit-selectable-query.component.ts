import { Component, OnInit } from '@angular/core';
import { cilMediaPlay, cilReload, cilSave } from '@coreui/icons';

@Component({
  selector: 'app-add-edit-selectable-query',
  templateUrl: './add-edit-selectable-query.component.html',
  styleUrls: ['./add-edit-selectable-query.component.scss']
})
export class AddEditSelectableQueryComponent implements OnInit {
  selectedCondition: any = []
  
  icons = { cilReload, cilSave, cilMediaPlay }
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
    {
      id: 3,
      title: 'Consumption',
      columns: [
        { title: 'name', type: 'string' },
        { title: 'value', type: 'number' },
        { title: 'cost', type: 'number' },
        { title: 'target', type: 'number' },
        { title: 'dated', type: 'date' },
        { title: 'physicalQuantityId', type: 'string' },
        { title: 'unitOfMeasurementId', type: 'string' },
        { title: 'createdOn', type: 'date' },
        { title: 'updatedOn', type: 'date' },
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
  queries: any = [{ operation: '', operations: [], checked: true }]
  selectedCollection: any = {}
  rawQuery = ''
  queriesToSave: any = []
  preview: any = ''
  constructor() {}

  ngOnInit(): void {
    this.selectedCollection = this.collctions[0]
  }

  selectCollection(collectionId: string) {
    console.log(collectionId)
    this.selectedCollection = this.collctions.find(
      (x: any) => x.id.toString() == collectionId,
    )
  }

  selectColumn(col: any, index: number) {
    let type = this.selectedCollection.columns.find((x: any) => x.title == col)
      .type
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
    if (this.queries.length) {
      let query = `SELECT * from ${this.selectedCollection.title} WHERE`
      for (let i = 0; i < this.queries.length; i++) {
        let option = this.queries[i]
        if (option.checked) {
          const operator = option.operation
          const column = option.field
          const value = option.value
          const queryCondition = this.buildQuery(operator, column, value)
          console.log(query)
          query += `${option.condition || ''} ${queryCondition} `
        }
      }
      this.queriesToSave = query
      console.log('query:', query)
    }
  }
  setPreview() {
    this.preview =
      JSON.stringify(this.queriesToSave) || this.rawQuery.toString()
  }

  buildQuery(operator: string, column: any, value: any) {
    let query
debugger
    switch (operator) {
      case '=':
        query = `${column} = ${value}`
        break
      case '>':
        query = `${column} > ${value}`
        break
      case '<':
        query = `${column} < ${value}`
        break
      case '<=':
        query = `${column} <= ${value}`
        break
      case '>=':
        query = `${column} >= ${value}`
        break
      case 'Contains Words':
        query = `${column} LIKE '%${value}%'`
        break
      case 'Does Not Contain Words':
        query = `${column} NOT LIKE '%${value}%'`
        break
      default:
        throw new Error('Invalid operator')
    }

    return query
  }

  selectCondition(val: any, i: any) {
    this.selectedCondition[i] = val
  }

  executeQuery() {

  }
  saveQuery() {
    // this.activeTabIndex = 1
  }

}
