import { IsEmail, IsNotEmpty } from 'class-validator';

export class AddMemberDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
