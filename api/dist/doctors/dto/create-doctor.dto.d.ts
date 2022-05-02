import * as yup from 'yup';
export declare const CreateDoctorSchema: import("yup/lib/object").OptionalObjectSchema<{
    name: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    CRM: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    phone: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    cell: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    CEP: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    Specialties: import("yup/lib/array").OptionalArraySchema<yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[]>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    name: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    CRM: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    phone: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    cell: yup.NumberSchema<number, import("yup/lib/types").AnyObject, number>;
    CEP: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    Specialties: import("yup/lib/array").OptionalArraySchema<yup.AnySchema<any, any, any>, import("yup/lib/types").AnyObject, any[]>;
}>>;
export declare class CreateDoctorDto {
    name: string;
    CRM: string;
    phone: number;
    cell: number;
    CEP: string;
    Specialties: [];
}
