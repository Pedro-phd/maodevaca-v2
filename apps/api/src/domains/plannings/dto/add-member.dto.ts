import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AddMemberDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
