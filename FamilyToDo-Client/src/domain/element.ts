import { ElementStatus } from './element-status';

export interface Element {
    id: number;
    elementName: string;
    elementStatus: ElementStatus;
}
