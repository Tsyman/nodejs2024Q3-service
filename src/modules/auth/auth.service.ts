import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth.payload';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(authDto: AuthDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByLogin(authDto.login);
    if (user?.password !== authDto.password) {
      throw new ForbiddenException('Unauthorized');
    }
    const payload = { sub: user.id, login: user.login };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
