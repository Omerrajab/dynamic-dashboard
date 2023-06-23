import { query } from '@angular/animations'
import { Component, OnInit, ViewChild } from '@angular/core'
import { cilReload, cilSave, cilMediaPlay } from '@coreui/icons';
import { AddEditVisualizationComponent } from '../add-edit-visualization/add-edit-visualization.component';
import { QueryService } from '../../../services/query/query.service'

@Component({
  selector: 'app-add-edit-query',
  templateUrl: './add-edit-query.component.html',
  styleUrls: ['./add-edit-query.component.scss'],
})
export class AddEditQueryComponent implements OnInit {
  @ViewChild(AddEditVisualizationComponent, { static: false })
  childComponent: AddEditVisualizationComponent = new AddEditVisualizationComponent;
  icons = { cilReload, cilSave, cilMediaPlay }
  searchText: string = ''
  selectedCondition: any = []


  tableHeaders: string[] = ['Header 1', 'Header 2', 'Header 3', 'Header 1', 'Header 2', 'Header 3', 'Header 1', 'Header 2', 'Header 3'];
  queryData: any[] = [
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },
    { property1: 'Value 1', property2: 'Value A', property3: 'Value X', property4: 'Value 1', property5: 'Value A', property35: 'Value X', property15: 'Value 1', property25: 'Value A', property34: 'Value X' },


  ];
  visible: boolean = false
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
  customQuery: boolean = false
  disabledOptions = ['Is Empty', 'Is Not Empty']
  queries: any = [{ operation: '', operations: [], checked: true }]
  selectedCollection: any = {}
  rawQuery = ''
  queriesToSave: any = []
  preview: any = ''
  activeTabIndex: number = 0
  tabs: any = []
  activeVisualization: any = {};
  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
    this.selectedCollection = this.collctions[0].columns
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
          const queryCondition = this.buildQuery(operator, 1, value)
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

  resetSearch() {

  }

  executeQuery() {
    this.queryData
    this.tableHeaders = []
  }
  saveQuery() {
    this.activeTabIndex = 1
  }

  addTab() {
    this.tabs.push({ title: `Visualization ${this.tabs.length + 1}`, saved: false })
    setTimeout(() => {
      this.activeTabIndex = this.tabs?.length || 0
      this.visible = !this.visible;
    }, 100);

  }

  handleModalChange(event: any) {
    this.visible = event;
  }


  closeModal() {
    this.tabs = this.tabs.filter((x: { saved: boolean; }) => x.saved === true)
    this.visible = !this.visible;

  }
  onVisualizationSelect(type: any) {
    this.activeVisualization.type = type
  }
  saveVisualization() {
    this.childComponent.saveVisualization();
  }
}
