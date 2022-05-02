"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorSpecialties = void 0;
const specialty_entity_1 = require("../../specialties/entities/specialty.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
const doctor_entity_1 = require("./doctor.entity");
let DoctorSpecialties = class DoctorSpecialties extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => doctor_entity_1.Doctor),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DoctorSpecialties.prototype, "doctorId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => specialty_entity_1.Specialty),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DoctorSpecialties.prototype, "specialtyId", void 0);
DoctorSpecialties = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'doctorSpecialties',
    })
], DoctorSpecialties);
exports.DoctorSpecialties = DoctorSpecialties;
//# sourceMappingURL=doctorSpecialties.entity.js.map