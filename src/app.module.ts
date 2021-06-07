import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'orm.config';
import { AuthModule } from './auth/auth.module';
import { CharactersModule } from './characters/characters.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    AuthModule,
    CharactersModule,
    ItemsModule,
    TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}
