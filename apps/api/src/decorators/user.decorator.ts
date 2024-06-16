import { createParamDecorator } from '@nestjs/common';

export interface UserDecorator {
  id: string;
}

export const User = createParamDecorator<UserDecorator>((_, req) => {
  return req.args[0].user;
});
