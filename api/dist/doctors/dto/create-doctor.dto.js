"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDoctorDto = exports.CreateDoctorSchema = void 0;
const yup = require("yup");
exports.CreateDoctorSchema = yup.object({
    name: yup.string().required().min(4).max(20),
    CRM: yup.string().required().min(4).max(7),
    phone: yup.number(),
    cell: yup.number(),
    CEP: yup.string().required().min(9).max(9),
    Specialties: yup.array().min(2),
});
class CreateDoctorDto {
}
exports.CreateDoctorDto = CreateDoctorDto;
//# sourceMappingURL=create-doctor.dto.js.map