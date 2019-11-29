import { Component, OnInit } from '@angular/core';
import { TableService } from '../../service/table.service';
import { ElementService } from '../../service/element.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  taskId : number;

  constructor(
    private tableService: TableService,
    private elementService: ElementService,
    private router: Router,
    private route: ActivatedRoute,
    private auth : AuthService
  ) { }

  ngOnInit() {
    this.element = {
      id: null,
      elementName: '',
      elementStatus: ElementStatus.UNDONE,
    };
    this.taskId = parseInt(this.route.snapshot.params.id);
    this.userRole = this.auth.userRole;
  }

  async submitElement(element: Element) {
    console.log('ITT MÉG JÓ : '+element.elementStatus);
    await this.elementService.createElement(element, this.taskId);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/', 'tables']);}); 
  }
}
