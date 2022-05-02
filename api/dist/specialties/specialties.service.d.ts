import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { Specialty } from './entities/specialty.entity';
export declare class SpecialtiesService {
    private specialtyModel;
    constructor(specialtyModel: typeof Specialty);
    create(createSpecialtyDto: CreateSpecialtyDto): string;
    findAll(): Promise<Specialty[]>;
    findOne(id: number): string;
    update(id: number, updateSpecialtyDto: UpdateSpecialtyDto): string;
    remove(id: number): string;
}
