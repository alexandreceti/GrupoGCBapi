import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class YupValidationPipe implements PipeTransform {
    private schema;
    constructor(schema: any);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
