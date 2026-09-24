import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { compare } from 'bcrypt';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async singnin(createAuthDto: CreateAuthDto) {
    const user = await this.prismaService.user.findFirst({
      where: { email: createAuthDto.email },
    });

    if (!user) throw new NotFoundException('User not found.');

    const passwordMatch = await compare(createAuthDto.password, user.password);
    if (!passwordMatch) throw new UnauthorizedException('Invalid credentials.');

    const payload = { sub: user.id };

    return { acess_token: await this.jwtService.signAsync(payload) };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
