import { Module } from '@nestjs/common';
import { UsersController } from '@root/users/users.controller';
import { UsersService } from '@root/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@root/users/users.entity';
import { Role } from './role.entity';
import { AuthModule } from '@root/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), AuthModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
