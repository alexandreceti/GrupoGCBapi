import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { Doctor } from './doctors/entities/doctor.entity';
import { DoctorSpecialties } from './doctors/entities/doctorSpecialties.entity';
import { FiltroDeExcecaoHttp } from './filters/commonExpection.filter';
import { Specialty } from './specialties/entities/specialty.entity';
import { SpecialtiesModule } from './specialties/specialties.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mysqldb',
      port: 3306,
      username: 'alexandre',
      password: '123456789',
      database: 'doctors',
      autoLoadModels: true,
      synchronize: true,
      models: [__dirname + '/**/*entity.ts'],
    }),
    DoctorsModule,
    SpecialtiesModule,
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: FiltroDeExcecaoHttp,
    // },
    AppService,
  ],
})
export class AppModule {}
