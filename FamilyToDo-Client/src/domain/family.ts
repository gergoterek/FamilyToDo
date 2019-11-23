import { User } from './user';
import { Table } from './table';

export interface Family {
    id: number;
    User: User[];
    Table: Table[];
    
}