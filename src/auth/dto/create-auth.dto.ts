import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'The name must only characters' })
  @MinLength(3, { message: 'The name must have at least 3 characters' })
  @MaxLength(50, { message: 'The name can have a maximum of 50 characters' })
  email: string;

  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'The password must be a text' })
  @MinLength(8, { message: 'The password must at least 8 characters' })
  password: string;
}
