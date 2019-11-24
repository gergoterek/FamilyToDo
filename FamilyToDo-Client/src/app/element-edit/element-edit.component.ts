import { Component, OnInit } from '@angular/core';
import { Element } from 'src/domain/element';
import { ElementService } from '../../service/element.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.css']
})
export class ElementEditComponent implements OnInit {

  element: Element;

  constructor(
    private elementService: ElementService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const elementId = parseInt(
      this.route.snapshot.params.id);
    this.element = await this.elementService.getElement(elementId);
  }

  async submitElement(element: Element) {
    element.id = this.element.id;
    await this.elementService.modifyElement(element);
    this.router.navigate(['/', 'elements']);
  }

}
