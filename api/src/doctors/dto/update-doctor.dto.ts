import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorDto } from './create-doctor.dto';

import * as yup from 'yup';

export const UpdateDoctorSchema = yup.object({
  id: yup.string().optional().nullable(),
  name: yup.string().optional().nullable().min(4).max(20),
  CRM: yup.string().optional().nullable().min(4).max(7),
  phone: yup.number().optional().nullable(),
  cell: yup.number().optional().nullable(),
  CEP: yup.string().optional().nullable().min(9).max(9),
  Specialties: yup.array().optional().nullable().min(2),
});

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {
  @ApiProperty({
    required: false,
  })
  name?: string;

  @ApiProperty({
    required: false,
  })
  CRM?: string;

  @ApiProperty({
    required: false,
  })
  phone?: number;

  @ApiProperty({
    required: false,
  })
  cell?: number;

  @ApiProperty({
    required: false,
  })
  CEP?: string;

  @ApiProperty({
    type: 'array',
    required: false,
    minItems: 2,
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  })
  Specialties?: [];
}
