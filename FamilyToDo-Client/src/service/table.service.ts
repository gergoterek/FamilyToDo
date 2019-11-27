import { Injectable } from '@angular/core';
import { Table } from 'src/domain/table';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  tables: Table[] = [];
  allTables: Table[] = this.tables;


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
      this.allTables = this.tables = tables.map(this.createTableModel);
  }

  async createTable(table: Table): Promise<any> {
    await this.http.post('task/add', table).toPromise();
  }

  async modifyTable(table: Table): Promise<any> {
    await this.http.patch(`task/${table.id}`, table).toPromise();
  }

  private createTableModel(table: any): Table {
    return {
      ...table,
    } as Table;
  }
  
/*
  async getElements() {
    const elements = await (this.http.get('elements')
      .toPromise() as Promise<any[]>);
      this.elements = elements.map(this.createElementModel);
  }

  async getElement(elementId: number): Promise<Element> {
    const element = await (this.http.get(`elements/${elementId}`)
      .toPromise() as Promise<any>);
    return this.createElementModel(element);
  }

  async createElement(element: Element): Promise<any> {
    await this.http.post('elements', element).toPromise();
  }

  async modifyElement(element: Element): Promise<any> {
    await this.http.patch(`elements/${element.id}`, element).toPromise();
  }

  private createElementModel(element: any): Element {
    return {
      ...element,
    } as Element;
  }
  */
}
