import { Injectable } from '@angular/core';
import { Table } from 'src/domain/table';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  tables: Table[] = [];


  constructor(
    private http: HttpClient
  ) { }

  async getTable(tableId: number): Promise<any> {
    const table = await (this.http.get(`task/${tableId}`)
      .toPromise() as Promise<any>);
  }
  async getTables() {
    const tables = await (this.http.get('task')
      .toPromise() as Promise<any[]>);
  }

  async createTable(table: Table): Promise<any> {
    await this.http.post('task', table).toPromise();
  }

  async modifyTable(table: Table): Promise<any> {
    await this.http.patch(`task/${table.id}`, table).toPromise();
  }
}
