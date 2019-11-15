import { Moment } from 'moment';

export interface Property {
    id: number;
    name: string;
    desc: string;
    createAt: Moment;
}