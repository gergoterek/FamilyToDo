import { Element } from './element';

export interface Table {
    id: number;
    taskName: string;
    elements: Element[];
}
