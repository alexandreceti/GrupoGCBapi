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
exports.Doctor = void 0;
const specialty_entity_1 = require("./../../specialties/entities/specialty.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
const doctorSpecialties_entity_1 = require("./doctorSpecialties.entity");
let Doctor = class Doctor extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID, defaultValue: sequelize_typescript_1.DataType.UUIDV4 }),
    __metadata("design:type", String)
], Doctor.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(7),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "CRM", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER(),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Doctor.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER(),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Doctor.prototype, "cell", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "complement", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "district", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "locality", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(9),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "CEP", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => specialty_entity_1.Specialty, () => doctorSpecialties_entity_1.DoctorSpecialties),
    __metadata("design:type", Array)
], Doctor.prototype, "Specialties", void 0);
Doctor = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'doctors',
        paranoid: true,
    })
], Doctor);
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.entity.js.map