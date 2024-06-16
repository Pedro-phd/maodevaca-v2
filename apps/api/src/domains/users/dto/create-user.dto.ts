import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { regex } from 'src/helpers/regex.helper';

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @Matches(regex.password, {
    message:
      'The password must contain uppercase letters, lowercase letters, numbers and special characters',
  })
  password: string;
}
