import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  providers: [UserService],
})
export class UserModule {}
