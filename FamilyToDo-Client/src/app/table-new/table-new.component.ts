import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/service/table.service';
import { Router } from '@angular/router';
import { Table } from 'src/domain/table';
import { AuthService } from 'src/service/auth.service';
import { UserRole } from 'src/domain/user-role';

@Component({
  selector: 'app-table-new',
  templateUrl: './table-new.component.html',
  styleUrls: ['./table-new.component.css']
})
export class TableNewComponent implements OnInit {
  table: Table;
  userRole : UserRole;

  constructor(
    private tableService: TableService,
    private router: Router,
    private auth : AuthService
  ) { }

  ngOnInit() {
    this.table = {
      id: null,
      taskName:"",
      elements:null
    };

    this.userRole = this.auth.userRole;
  }

  async submitTable(table: Table) {
    await this.tableService.createTable(table);
    this.router.navigate(['/', 'tables']);
  }


}
