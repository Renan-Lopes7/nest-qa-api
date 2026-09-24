import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class QuestionsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createQuestionDto: CreateQuestionDto, userId: number) {
    return this.prismaService.questions.create({
      data: { ...createQuestionDto, userId },
    });
  }

  findAll() {
    return this.prismaService.questions.findMany({
      include: {
        answers: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.questions.findUnique({
      where: { id },
      include: {
        answers: true,
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const questionExist = this.prismaService.questions.findFirst({
      where: { id },
    });

    if (!questionExist)
      throw new BadRequestException('This question not exist');

    const updateQuestion = this.prismaService.questions.update({
      where: { id },
      data: updateQuestionDto,
    });

    return {
      message: 'Updated question',
      updateQuestion,
    };
  }

  remove(id: number) {
    this.prismaService.questions.delete({
      where: { id },
    });

    return {
      message: 'Question deleted',
    };
  }
}
