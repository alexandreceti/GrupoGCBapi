import { Specialty } from './../../specialties/entities/specialty.entity';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { DoctorSpecialties } from './doctorSpecialties.entity';

@Table({
  tableName: 'doctors',
  paranoid: true,
  timestamps: true,
})
export class Doctor extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(7),
    allowNull: false,
  })
  CRM: string;

  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
  })
  phone: number;

  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
  })
  cell: number;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  complement: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  district: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  locality: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING(9),
    allowNull: false,
  })
  CEP: string;

  @Column({
    type: DataType.DATE(),
    allowNull: true,
  })
  deletedAt?: Date;

  @BelongsToMany(() => Specialty, () => DoctorSpecialties)
  Specialties: Specialty[];

  // Specialties: Specialty[];
  // @HasMany(() => Specialty, () => DoctorSpecialties)
  // Specialty: Specialty[];
}
