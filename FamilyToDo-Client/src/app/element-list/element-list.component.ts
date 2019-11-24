import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Element } from 'src/domain/element';
import { ElementService } from '../../service/element.service';
import { Router } from '@angular/router';
import { ElementStatus } from 'src/domain/element-status';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() element: Element;
  @Output() elementSubmit: EventEmitter<Element> = new EventEmitter();


  constructor(
    public elementService: ElementService
  ) { }

  ngOnInit() {
    this.elementService.getElements();
  }
}
