import { Injectable } from '@angular/core';
import { Table } from 'src/domain/table';
import { HttpClient } from '@angular/common/http';
import { Family } from 'src/domain/family';
import { User } from 'src/domain/user';
import { Invitation } from 'src/domain/invitation';

@Injectable({
  providedIn: 'root'
})

export class FamilyService {

  // family: Family[] = [];
  // myFamily: Family[] = this.family;

  invitation: Invitation;

  constructor(
    private http: HttpClient
  ) { }

  async getFamily() : Promise<Family>{
    const family = await (this.http.get('user/family')
      .toPromise() as Promise<any>);
      return this.createFamilyModel(family);
  }
  // async getFamilyUsers() {
  //   const family = await (this.http.get('user/family')
  //     .toPromise() as Promise<any[]>);
  //   this.families = family.map(this.createFamilyModel);
  //   this.users = createFamilyUsers(families);
  // }

  // async getInvitation() : Promise<Invitation>{
  //   const inv = await (this.http.get('user/invitation')
  //     .toPromise() as Promise<any>);
  //     return this.createInvitationModel(inv);
  // }

  async createInvitation(invitation: Invitation): Promise<Invitation> {
    await this.http.post('user/invitation', invitation).toPromise() as Promise<any>;
    return this.createInvitationModel(invitation);
  }

  private createFamilyModel(family: any): Family {
    return {
      ...family,
    } as Family;
  }
  private createFamilyUsers(family: any): User[] {
    return {
      ...family,
    } as User[];
  }

  private createInvitationModel(invitation: any): Invitation {
    return {
      ...invitation,
    } as Invitation;
  }
  
}


  
