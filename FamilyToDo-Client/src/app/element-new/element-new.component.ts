import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../service/element.service';
import { Router } from '@angular/router';
import { ElementStatus } from 'src/domain/element-status';
import { Element } from 'src/domain/element';
@Component({
  selector: 'app-element-new',
  templateUrl: './element-new.component.html',
  styleUrls: ['./element-new.component.css']
})
export class ElementNewComponent implements OnInit {

  element: Element;

  constructor(
    private elementService: ElementService,
    private router: Router


  ) { }

  ngOnInit() {
    this.element = {
      id: null,
      elementName: '',
      elementStatus: 'UNDONE' as ElementStatus,
    };
  }

  async submitElement(element: Element) {
    await this.elementService.createElement(element);
    this.router.navigate(['/', 'elements']);
  }
}
