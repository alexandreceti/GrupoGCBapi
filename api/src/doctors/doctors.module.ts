import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { Doctor } from './entities/doctor.entity';
import { DoctorSpecialties } from './entities/doctorSpecialties.entity';
import { Specialty } from 'src/specialties/entities/specialty.entity';

@Module({
  imports: [SequelizeModule.forFeature([Doctor, Specialty, DoctorSpecialties])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
