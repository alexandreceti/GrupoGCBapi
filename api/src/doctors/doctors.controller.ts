import { YupValidationPipe } from './doctor.pipe';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UsePipes,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto, CreateDoctorSchema } from './dto/create-doctor.dto';
import { UpdateDoctorDto, UpdateDoctorSchema } from './dto/update-doctor.dto';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { query } from 'express';

@ApiTags('doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Doctor' })
  @UsePipes(new YupValidationPipe(CreateDoctorSchema))
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    return await this.doctorsService.create(createDoctorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all Doctor' })
  @ApiQuery({
    name: 'search',
    type: 'string',
    description: 'Parameter search filter',
    required: false,
  })
  findAll(@Query('search') search: string) {
    return this.doctorsService.findAll(search);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one id Doctor' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.doctorsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Doctor' })
  @UsePipes(new YupValidationPipe(UpdateDoctorSchema))
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    return await this.doctorsService.update(id, updateDoctorDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @ApiOperation({ summary: 'Deleted Doctor' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.doctorsService.remove(id);
  }
}
