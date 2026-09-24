import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [DatabaseModule],
})
export class QuestionsModule {}
