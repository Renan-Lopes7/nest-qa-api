import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty({ message: 'Body is required' })
  @IsString({ message: 'Body must be string' })
  body: string;
}
