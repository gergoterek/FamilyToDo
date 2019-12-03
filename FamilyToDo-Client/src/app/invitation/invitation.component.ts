import { Component, OnInit, Input } from '@angular/core';
import { Router, Route } from '@angular/router';
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


  family: Family;

  invitation: Invitation;

  constructor(
    private familyService: FamilyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.invitation = {
      id: null,
      invitationCode: Math.floor((Math.random() * 100000000) + 1000000),
      family: null,
      createdAt: null,
    }
  }

<<<<<<< HEAD
  async submitInvitation() {
      console.log("code->" +this.invitation.invitationCode);
      await this.familyService.createInvitation(this.invitation);
      this.copyMessage(this.invitation.invitationCode.toString())
      this.router.navigate(['/', 'family']);
=======
  async submitInvitation(invitation: Invitation) {
      await this.familyService.createInvitation(this.invitation);
      this.copyMessage(invitation.invitationCode.toString())
      this.router.navigate(['/', 'family']);    
>>>>>>> 8b2617e1c358cd5c83a08be2a157a57188dda8de
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
