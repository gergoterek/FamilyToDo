import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/domain/user';
import { Invitation } from 'src/domain/invitation';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { UserRole } from 'src/domain/user-role';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hidePassword = true;

  invitation: Invitation;

  user: User ;
  

  constructor(
    private authService: AuthService,
    private router: Router,
    
  ) { }

  ngOnInit(){
    this.user = {
      nickname: null,
      username: '',
      password: '',
      role: UserRole.Guest,    
    },
    this.invitation= {
      id: null,
      invitationCode: null,
      family: null,
      createdAt: null,
    }
  
  }

  onSubmit(form: FormGroup) {
    const user = form.value as User;
    if(this.invitation.invitationCode === null){
      this.authService.registration(user.nickname, user.username, user.password);
    }
    else{
      this.authService.registrationInv(user.nickname, user.username, user.password, this.invitation);
    }
  }
  
}