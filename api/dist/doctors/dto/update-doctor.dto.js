"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoctorDto = exports.UpdateDoctorSchema = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_doctor_dto_1 = require("./create-doctor.dto");
const yup = require("yup");
exports.UpdateDoctorSchema = yup.object({
    id: yup.string().optional().nullable(),
    name: yup.string().optional().nullable().min(4).max(20),
    CRM: yup.string().optional().nullable().min(4).max(7),
    phone: yup.number().optional().nullable(),
    cell: yup.number().optional().nullable(),
    CEP: yup.string().optional().nullable().min(9).max(9),
    Specialties: yup.array().optional().nullable().min(2),
});
class UpdateDoctorDto extends (0, mapped_types_1.PartialType)(create_doctor_dto_1.CreateDoctorDto) {
}
exports.UpdateDoctorDto = UpdateDoctorDto;
//# sourceMappingURL=update-doctor.dto.js.map