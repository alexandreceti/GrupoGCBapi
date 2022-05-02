import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private schema: any) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      if (metadata.type === 'body') {
        // console.log('---- value ----');
        // console.log(value);
        const result = await this.schema.validate(value);
        // console.log(result);
      }
      return value;
    } catch (error) {
      console.log(error);
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
  }
}
