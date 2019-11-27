import { Component, OnInit } from '@angular/core';
import { TableService } from '../../service/table.service';
import { Router } from '@angular/router';
import { ElementStatus } from 'src/domain/element-status';
import { Element } from 'src/domain/element';
import { AuthService } from 'src/service/auth.service';
import { UserRole } from 'src/domain/user-role';
@Component({
  selector: 'app-element-new',
  templateUrl: './element-new.component.html',
  styleUrls: ['./element-new.component.css']
})
export class ElementNewComponent implements OnInit {

  element: Element;
  userRole: UserRole;

  constructor(
    private tableService: TableService,
    private router: Router,
    private auth : AuthService
  ) { }

  ngOnInit() {
    this.element = {
      id: null,
      elementName: '',
      elementStatus: 'UNDONE' as ElementStatus,
    };

    this.userRole = this.auth.userRole;
  }

  async submitElement(element: Element) {
    await this.tableService.createElement(element);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/', 'tables']);}); 
  }
}
