import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Table } from 'src/domain/table';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() table: Table;
  @Output() tableSubmit: EventEmitter<Table> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  async submitTable(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.tableSubmit.emit(form.getRawValue() as Table);
  }
}