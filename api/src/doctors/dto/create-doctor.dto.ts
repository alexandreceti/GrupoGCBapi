import { Specialty } from './../../specialties/entities/specialty.entity';
import { CreateSpecialtyDto } from './../../specialties/dto/create-specialty.dto';
import { ApiProperty } from '@nestjs/swagger';
import * as yup from 'yup';

export const CreateDoctorSchema = yup.object({
  name: yup.string().required().min(4).max(20),
  CRM: yup.string().required().min(4).max(7),
  phone: yup.number(),
  cell: yup.number(),
  CEP: yup.string().required().min(9).max(9),
  Specialties: yup.array().min(2),
});

export class CreateDoctorDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  CRM: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  cell: number;

  @ApiProperty()
  CEP: string;

  @ApiProperty({
    type: 'array',
    minItems: 2,
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  })
  Specialties: [];
}
