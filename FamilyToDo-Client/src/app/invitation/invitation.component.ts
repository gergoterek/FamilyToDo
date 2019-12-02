import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Invitation } from 'src/domain/invitation';
import { Family } from 'src/domain/family';
import { FamilyService } from 'src/service/family.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  @Input()
  set invitationField(code: number) {    
  }

  router: Router;

  family: Family;

  invitation: Invitation;

  constructor(
    private familyService: FamilyService
  ) { }

  async ngOnInit() {
    this.invitation = {
      id: null,
      invitationCode: Math.floor((Math.random() * 10000000) + 100000),
      family: null,
      createdAt: null,
    }
  }

  async submitInvitation(invitation: Invitation) {
      await this.familyService.createInvitation(invitation);
      this.copyMessage(invitation.invitationCode.toString())
      this.router.navigate(['/', 'family']);
    
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
