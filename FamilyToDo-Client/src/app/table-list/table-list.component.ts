import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from 'src/domain/table';
import { FormGroup } from '@angular/forms';
import { TableService } from '../../service/table.service';
import { Element } from 'src/domain/element';
import { ElementStatus } from 'src/domain/element-status';
import { ElementService } from 'src/service/element.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  @Input() mode: 'create' | 'edit';
  @Input() table: Table;
  @Output() tableSubmit: EventEmitter<Table> = new EventEmitter();
  myElement : Element;
  
  constructor(
    public tableService: TableService,
    public elementService: ElementService
  ) { }

  ngOnInit() {
    this.tableService.getTables();    
  }

  async changeStatus(event, element: Element) {
    if (element.elementStatus === ElementStatus.Done){
      element.elementStatus = ElementStatus.Undone;
    }
    else{
      element.elementStatus = ElementStatus.Done;
    }
    this.elementService.modifyElement(element);
    
    //console.log("Aktuális státusz: "+element.elementStatus);
  }

  async submitTable(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.tableSubmit.emit(form.getRawValue() as Table);
  }

}
