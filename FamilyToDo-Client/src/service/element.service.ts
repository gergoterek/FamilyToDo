import { Injectable } from '@angular/core';
import { Element } from 'src/domain/element';
import { ElementStatus } from 'src/domain/element-status';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ElementService {

  elements: Element[] = [];


  constructor(
    private http: HttpClient
  ) { }

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

  async createElement(element: Element, taskId:number): Promise<any> {
    await this.http.post(`task/${taskId}/elements`, element).toPromise();
  }

  async modifyElement(element: Element): Promise<any> {
    await this.http.patch(`task/elements/${element.id}`, element).toPromise();
  }

  private createElementModel(element: any): Element {
    return {
      ...element,
    } as Element;
  }
}
