import { Specialty } from '../../specialties/entities/specialty.entity';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Doctor } from './doctor.entity';

@Table({
  tableName: 'doctorSpecialties',
})
export class DoctorSpecialties extends Model {
  @ForeignKey(() => Doctor)
  @Column
  doctorId: string;

  @ForeignKey(() => Specialty)
  @Column
  specialtyId: string;
}
