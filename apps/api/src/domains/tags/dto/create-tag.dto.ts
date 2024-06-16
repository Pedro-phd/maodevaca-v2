import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTagDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
