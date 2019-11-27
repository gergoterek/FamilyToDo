import { UserRole } from './user-role';

export interface User {
    nickname: string;
    username: string;
    password: string;
    role: UserRole;
}