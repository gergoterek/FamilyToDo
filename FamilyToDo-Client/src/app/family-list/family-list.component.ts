import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'src/domain/table';
import { Family } from 'src/domain/family';
import { TableService } from '../../service/table.service';
import { FamilyService } from 'src/service/family.service';
import { Invitation } from 'src/domain/invitation';
@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  @Input()
  set invitationField(code: number) {    
      this.getInv();
      this.invitation.invitationCode = code;
  }

  family: Family;
  invitation: Invitation = {
    id: null,
    invitationCode: null,
  }


  constructor(
    private familyService: FamilyService
  ) { }

  async ngOnInit() {
    this.family = await this.familyService.getFamily();   
    this.invitation =  await this.familyService.getInvitation(); 
  }

  async getInv() {
    this.invitation =  await this.familyService.getInvitation();
  }

  

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


}

