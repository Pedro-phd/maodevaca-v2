import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwsService: JwtService,
  ) {}

  async login(user) {
    // add payload fields
    const payload = { sub: user.id };

    return {
      token: this.jwsService.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    let user: User;

    try {
      user = await this.userService.findBy({
        where: {
          email,
        },
      });
    } catch (error) {
      return null;
    }

    if (!user) {
      return null;
    }

    const isValidPass = await compare(password, user.password);
    if (!isValidPass) {
      return null;
    }
    return user;
  }
}
