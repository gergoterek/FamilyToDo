import { Component, OnInit } from "@angular/core";
import { Table } from "src/domain/table";
import { ActivatedRoute, Router } from "@angular/router";
import { TableService } from "../../service/table.service";

@Component({
  selector: "app-element-detail",
  templateUrl: "./element-detail.component.html",
  styleUrls: ["./element-detail.component.css"]
})
export class ElementDetailComponent implements OnInit {
  table: Table;

  constructor(
    private route: ActivatedRoute,
    public tableService: TableService,
    private router: Router
  ) {}

  async ngOnInit() {
    const param = parseInt(this.route.snapshot.params.id);
    this.table = await this.tableService.getTable(param);
  }

  editTable() {
    this.router.navigate([
      "tables", this.table.id, "edit"]);
  }
}