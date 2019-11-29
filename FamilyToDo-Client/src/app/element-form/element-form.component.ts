import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Element } from 'src/domain/element';
import { ElementStatus } from 'src/domain/element-status';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.css']
})
export class ElementFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() element: Element;
  @Input() taskId: number;
  @Output() elementSubmit: EventEmitter<Element> = new EventEmitter();

  formElement : Element;

  statuses = [{
    label: 'Undone',
    value: 'UNDONE',
  }, {
    label: 'Done',
    value: 'DONE',
  }]
  
  constructor() { }

  ngOnInit() {}

  async submitElement(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.formElement = form.getRawValue() as Element;
    this.formElement.elementStatus = ElementStatus.Undone;

    this.elementSubmit.emit(this.formElement);
  }
}
