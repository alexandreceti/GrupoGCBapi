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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorsService = void 0;
const specialty_entity_1 = require("../specialties/entities/specialty.entity");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const doctor_entity_1 = require("./entities/doctor.entity");
const cep_hander_1 = require("../util/cep.hander");
let DoctorsService = class DoctorsService {
    constructor(doctorModel, specialtyModel) {
        this.doctorModel = doctorModel;
        this.specialtyModel = specialtyModel;
    }
    async create(createDoctorDto) {
        try {
            const buscacep = await (0, cep_hander_1.default)(createDoctorDto.CEP);
            const doctor = await this.doctorModel.create(Object.assign(Object.assign({}, createDoctorDto), buscacep));
            const specialties = await Promise.all(createDoctorDto.Specialties.map((element) => {
                const specialty = this.specialtyModel.findByPk(element.id);
                return specialty;
            }));
            console.log(specialties);
            await doctor.$set('Specialties', specialties);
            return doctor;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async findAll() {
        return this.doctorModel.findAll({
            include: { model: specialty_entity_1.Specialty, through: { attributes: [] } },
        });
    }
    async findOne(id) {
        try {
            return await this.doctorModel.findByPk(id, {
                include: { model: specialty_entity_1.Specialty, through: { attributes: [] } },
                rejectOnEmpty: true,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async update(id, updateDoctorDto) {
        var _a;
        try {
            const doctor = await this.doctorModel.findByPk(id, {
                rejectOnEmpty: true,
            });
            doctor.update(updateDoctorDto);
            if ((_a = updateDoctorDto.Specialties) === null || _a === void 0 ? void 0 : _a.length) {
                const specialties = await Promise.all(updateDoctorDto.Specialties.map((element) => {
                    const specialty = this.specialtyModel.findByPk(element.id);
                    return specialty;
                }));
                await doctor.$set('Specialties', specialties);
                await doctor.save();
            }
            return doctor;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async remove(id) {
        const doctor = await this.doctorModel.findByPk(id, {
            rejectOnEmpty: true,
        });
        return doctor.destroy();
    }
};
DoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(doctor_entity_1.Doctor)),
    __param(1, (0, sequelize_1.InjectModel)(specialty_entity_1.Specialty)),
    __metadata("design:paramtypes", [Object, Object])
], DoctorsService);
exports.DoctorsService = DoctorsService;
//# sourceMappingURL=doctors.service.js.map