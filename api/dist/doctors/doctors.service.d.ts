import { Specialty } from 'src/specialties/entities/specialty.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
export declare class DoctorsService {
    private doctorModel;
    private specialtyModel;
    constructor(doctorModel: typeof Doctor, specialtyModel: typeof Specialty);
    create(createDoctorDto: CreateDoctorDto | any): Promise<Doctor>;
    findAll(): Promise<Doctor[]>;
    findOne(id: string): Promise<Doctor>;
    update(id: string, updateDoctorDto: UpdateDoctorDto | any): Promise<Doctor>;
    remove(id: string): Promise<void>;
}
