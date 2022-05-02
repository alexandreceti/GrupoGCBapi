import { Specialty } from 'src/specialties/entities/specialty.entity';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
import cepHander from 'src/util/cep.hander';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor)
    private doctorModel: typeof Doctor,

    @InjectModel(Specialty)
    private specialtyModel: typeof Specialty,
  ) {}

  async create(createDoctorDto: CreateDoctorDto | any) {
    try {
      const buscacep = await cepHander(createDoctorDto.CEP);
      const doctor = await this.doctorModel.create({
        ...createDoctorDto,
        ...buscacep,
      });

      const specialties = await Promise.all(
        createDoctorDto.Specialties.map((element) => {
          const specialty = this.specialtyModel.findByPk(element.id);
          return specialty;
        }),
      );

      await doctor.$set('Specialties', specialties);
      return doctor;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.doctorModel.findAll({
      // attributes: ['id', 'name', 'CRM', 'CEP', 'phone', 'cell'],
      include: { model: Specialty, through: { attributes: [] } },
    });
  }

  async findOne(id: string) {
    try {
      return await this.doctorModel.findByPk(id, {
        include: { model: Specialty, through: { attributes: [] } },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto | any) {
    try {
      const doctor = await this.doctorModel.findByPk(id, {
        rejectOnEmpty: true,
      });
      doctor.update(updateDoctorDto);

      if (updateDoctorDto.Specialties?.length) {
        const specialties = await Promise.all(
          updateDoctorDto.Specialties.map((element) => {
            const specialty = this.specialtyModel.findByPk(element.id);
            return specialty;
          }),
        );
        await doctor.$set('Specialties', specialties);
        await doctor.save();
      }

      return doctor;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    const doctor = await this.doctorModel.findByPk(id, {
      rejectOnEmpty: true,
    });
    return doctor.destroy();
  }
}
