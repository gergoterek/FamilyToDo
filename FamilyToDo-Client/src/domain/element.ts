import { ElementStatus } from './element-status';

export interface Element {
    id: number;
    name: string;
    status: ElementStatus;
}
