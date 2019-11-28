import { ElementStatus } from './element-status';
import { Table } from './table';

export interface Element {
    id: number;
    elementName: string;
    elementStatus: ElementStatus;
}
