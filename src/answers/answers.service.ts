import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AnswersService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createAnswerDto: CreateAnswerDto, userId: number, questionId: number) {
    return this.prismaService.answers.create({
      data: {
        body: createAnswerDto.body,
        userId,
        questionId,
      },
    });
  }

  findAll() {
    return this.prismaService.answers.findMany();
  }

  findOne(id: number) {
    return this.prismaService.answers.findFirst({ where: { id } });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.prismaService.answers.update({
      where: { id },
      data: updateAnswerDto,
    });
  }

  remove(id: number) {
    return this.prismaService.answers.delete({ where: { id } });
  }
}
