import { DoctorSpecialties } from '../../doctors/entities/doctorSpecialties.entity';
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';

@Table({
  tableName: 'specialties',
})
export class Specialty extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  // @BelongsToMany(Doctor, {through: 'doctor_specialty', as: "Doctors", foreignKey: 'doctor_id'},);
  // @BelongsToMany(() => Doctor, () => DoctorSpecialties)
  // Doctors: Doctor[];
}
