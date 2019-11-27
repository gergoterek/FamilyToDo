import { Injectable } from '@angular/core';
import { Table } from 'src/domain/table';
import { HttpClient } from '@angular/common/http';
import { Family } from 'src/domain/family';
import { User } from 'src/domain/user';

@Injectable({
  providedIn: 'root'
})

export class FamilyService {

  // family: Family[] = [];
  // myFamily: Family[] = this.family;

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
}


  
