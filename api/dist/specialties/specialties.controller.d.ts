import { SpecialtiesService } from './specialties.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
export declare class SpecialtiesController {
    private readonly specialtiesService;
    constructor(specialtiesService: SpecialtiesService);
    create(createSpecialtyDto: CreateSpecialtyDto): string;
    findAll(): Promise<import("./entities/specialty.entity").Specialty[]>;
    findOne(id: string): string;
    update(id: string, updateSpecialtyDto: UpdateSpecialtyDto): string;
    remove(id: string): string;
}
