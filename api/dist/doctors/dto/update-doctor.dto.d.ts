import { CreateDoctorDto } from './create-doctor.dto';
import * as yup from 'yup';
export declare const UpdateDoctorSchema: import("yup/lib/object").OptionalObjectSchema<{
    id: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    name: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    CRM: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    phone: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    cell: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    CEP: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    Specialties: yup.ArraySchema<yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[], any[]>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    id: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    name: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    CRM: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    phone: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    cell: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    CEP: yup.StringSchema<string, import("yup/lib/types").AnyObject, string>;
    Specialties: yup.ArraySchema<yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[], any[]>;
}>>;
declare const UpdateDoctorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDoctorDto>>;
export declare class UpdateDoctorDto extends UpdateDoctorDto_base {
}
export {};
