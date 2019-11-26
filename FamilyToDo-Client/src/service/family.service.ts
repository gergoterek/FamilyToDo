import { Injectable } from '@angular/core';
import { Table } from 'src/domain/table';
import { HttpClient } from '@angular/common/http';
import { Family } from 'src/domain/family';

@Injectable({
  providedIn: 'root'
})

export class FamilyService {

  families: Family[] = [];


  constructor(
    private http: HttpClient
  ) { }

  async getFamilyMembers() {
    const family = await (this.http.get('user/family')
      .toPromise() as Promise<any[]>);
  }
}
