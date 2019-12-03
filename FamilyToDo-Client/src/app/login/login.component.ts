import { Component, OnInit } from '@angular/core';
import { User } from 'src/domain/user';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserRole } from 'src/domain/user-role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePassword = true;

  user: User = {
    nickname: null,
    username: '',
    password: '',
    role: UserRole.Guest,    
  };

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    const user = form.value as User;
    this.authService.login(user.username, user.password);
  }
  registration(){
    this.router.navigate(['/', 'registration']);
  }

  




}


