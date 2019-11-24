import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Element } from 'src/domain/element';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.css']
})
export class ElementFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() element: Element;
  @Output() elementSubmit: EventEmitter<Element> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  async submitElement(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.elementSubmit.emit(form.getRawValue() as Element);
  }
}
