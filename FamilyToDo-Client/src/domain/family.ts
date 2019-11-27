import { User } from './user';
import { Table } from './table';

export interface Family {
    id: number;
    name: String,
    users: User[];
    Table: Table[];
    
}