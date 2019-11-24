import { Component, OnInit } from "@angular/core";
import { Element } from "src/domain/element";
import { ActivatedRoute, Router } from "@angular/router";
import { ElementService } from "../../service/element.service";

@Component({
  selector: "app-element-detail",
  templateUrl: "./element-detail.component.html",
  styleUrls: ["./element-detail.component.css"]
})
export class ElementDetailComponent implements OnInit {
  element: Element;

  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService,
    private router: Router
  ) {}

  async ngOnInit() {
    const elementId = parseInt(this.route.snapshot.params.id);
    this.element = await this.elementService.getElement(elementId);
  }

  editElement() {
    this.router.navigate([
      "elements", this.element.id, "edit"]);
  }
}