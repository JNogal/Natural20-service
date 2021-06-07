import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthController } from './controllers/user-auth.controller';
import { User } from './entities/user.entity';
import { UserAuthService } from './services/user-auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserAuthService],
  controllers: [UserAuthController]
})
export class AuthModule {}
