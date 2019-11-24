import { Component, OnInit } from '@angular/core';
import { Table } from 'src/domain/table';
import { TableService } from '../../service/table.service';
import { FamilyService } from 'src/service/family.service';
@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  constructor(
    public familyService: FamilyService
  ) { }

  ngOnInit() {
    this.familyService.getFamilyMembers();
  }


}
