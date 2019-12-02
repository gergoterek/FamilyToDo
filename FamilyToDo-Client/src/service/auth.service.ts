import { Injectable } from '@angular/core';
import { User } from 'src/domain/user';
import { UserRole } from 'src/domain/user-role';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Invitation } from 'src/domain/invitation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;
  private invitation: Invitation;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.logout();
  }

  get isLoggedIn(): boolean {
    return this.user.role !== UserRole.Guest;
  }
  get token() {
    return btoa(`${this.user.username}:${this.user.password}`);
  }
  get role(): UserRole {
    return this.user.role;
  }
  get userRole(){
    return this.user.role;
  }  

  hasRole(roles: UserRole[]): boolean {
    return roles.some(
      role => role === this.role);
  }

  async login(username: string, password: string) {
    const oldUser = this.user;
    this.user = {
      nickname: null,
      role: null,
      username: username,
      password: password,
    };
    try {
      const user = await (this.http.get('user/login').toPromise() as Promise<User>);
      this.user.nickname = user.nickname;
      this.user.role = user.role;
      this.router.navigate(['/tables']);
    } catch (e) {
      this.user = oldUser;
    }
  }

  logout() {
    this.user = {
      nickname: 'Guest',
      username: null,
      password: null,
      role: UserRole.Guest,
    };
     this.router.navigate(['/login']);
  }

  async registration(nickname: string, username: string, password: string, invitationCode: number) {
    const oldUser = this.user;
    this.user = {
      nickname: nickname,
      role: UserRole.Admin,
      username: username,
      password: password,
    };
    this.invitation = {
      id: null,
      invitationCode: invitationCode,
      family: null,
      createdAt: null,
    };
    try {
      const user = await (this.http.post('user/registration', [this.user, this.invitation]).toPromise() as Promise<User>);
      this.user.nickname = user.nickname;
      this.user.role = user.role;
      this.router.navigate(['/user/login']);
    } catch (e) {
      this.user = oldUser;
    }
  }
}