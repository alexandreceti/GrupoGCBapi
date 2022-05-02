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
exports.SpecialtiesService = void 0;
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const specialty_entity_1 = require("./entities/specialty.entity");
let SpecialtiesService = class SpecialtiesService {
    constructor(specialtyModel) {
        this.specialtyModel = specialtyModel;
    }
    create(createSpecialtyDto) {
        return 'This action adds a new specialty';
    }
    findAll() {
        return this.specialtyModel.findAll();
    }
    findOne(id) {
        return `This action returns a #${id} specialty`;
    }
    update(id, updateSpecialtyDto) {
        return `This action updates a #${id} specialty`;
    }
    remove(id) {
        return `This action removes a #${id} specialty`;
    }
};
SpecialtiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(specialty_entity_1.Specialty)),
    __metadata("design:paramtypes", [Object])
], SpecialtiesService);
exports.SpecialtiesService = SpecialtiesService;
//# sourceMappingURL=specialties.service.js.map