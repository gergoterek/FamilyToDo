import { Family } from './family';
export interface Invitation {
    id: number;
    invitationCode: number;
    family: Family,
    createdAt: Date;
}