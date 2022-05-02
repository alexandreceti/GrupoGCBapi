import { Specialty } from './../../specialties/entities/specialty.entity';
import { Model } from 'sequelize-typescript';
export declare class Doctor extends Model {
    id: string;
    name: string;
    CRM: string;
    phone: number;
    cell: number;
    address: string;
    complement: string;
    district: string;
    locality: string;
    state: string;
    CEP: string;
    Specialties: Specialty[];
}
