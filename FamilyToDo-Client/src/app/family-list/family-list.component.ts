import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Table } from 'src/domain/table';
import { Family } from 'src/domain/family';
import { TableService } from '../../service/table.service';
import { FamilyService } from 'src/service/family.service';
import { Invitation } from 'src/domain/invitation';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  family: Family;
  
  constructor(
    private familyService: FamilyService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.family = await this.familyService.getFamily(); 
  }
  
  goToInvitation() {
    this.router.navigate([
      "family/invitation"]);
  }

  


}

