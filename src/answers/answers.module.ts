import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [AnswersController],
  providers: [AnswersService],
  imports: [DatabaseModule],
})
export class AnswersModule {}
