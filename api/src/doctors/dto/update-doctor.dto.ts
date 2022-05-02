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

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {}
