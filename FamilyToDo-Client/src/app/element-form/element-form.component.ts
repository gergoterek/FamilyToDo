import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Element } from 'src/domain/element';
import { ActivatedRoute } from '@angular/router';

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
  
  constructor() { }

  ngOnInit() {
    console.log('ELMENTFORM KOMPONENS JÓL VESZI ÁT: '+this.element.elementStatus);
  }

  async submitElement(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.elementSubmit.emit(form.getRawValue() as Element);
  }
}
