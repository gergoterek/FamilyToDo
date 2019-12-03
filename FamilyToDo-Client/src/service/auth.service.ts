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
  public wantRegister : Boolean = false;
  private user: User;
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
    if(!this.wantRegister){
      return 'Basic '+btoa(`${this.user.username}:${this.user.password}`);''
    }else{
      return '';//'Basic '+btoa(`${this.user.username}:${this.user.password}`);''
    }
    
  }
  get role(): UserRole {
    return this.user.role;
  }
  get userRole(){
    return this.user.role;
  }  

  get getAuth(): string{
    return "'Authorization', `Basic ${this.auth.token}`"
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


  async registration(nickname: string, username: string, password: string) : Promise<any>{
    this.wantRegister = true;
    this.user = {
      nickname: nickname,
      role: null,
      username: username,
      password: password,
    };
      await (this.http.post('user/registration', this.user).toPromise() as Promise<User>);
      this.wantRegister = false;
      this.router.navigate(['/user/login']);
  }


  async registrationInv(nickname: string, username: string, password: string, invitation: Invitation) : Promise<any>{
    this.wantRegister = true;
    this.user = {
      nickname: nickname,
      role: null,
      username: username,
      password: password,
    };
      await (this.http.post(`user/registration/family/${invitation.invitationCode}`,this.user).toPromise() as Promise<User>);
      this.wantRegister = false;
      this.router.navigate(['/user/login']);
  }

  private createUserModel(user: any): User {
    return {
      ...user,
    } as User;
  }
}