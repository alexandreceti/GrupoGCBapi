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
  name: string;
  CRM: string;
  phone: number;
  cell: number;
  CEP: string;
  Specialties: [];
}
