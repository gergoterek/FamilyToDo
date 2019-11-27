import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from 'src/domain/table';
import { FormGroup } from '@angular/forms';
import { TableService } from '../../service/table.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  @Input() mode: 'create' | 'edit';
  @Input() table: Table;
  @Output() tableSubmit: EventEmitter<Table> = new EventEmitter();

  
  constructor(
    public tableService: TableService
  ) { }

  ngOnInit() {
    this.tableService.getTables();    
  }

  async submitTable(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.tableSubmit.emit(form.getRawValue() as Table);
  }

}
