import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FlashcardsModule } from './flashcards/flashcards.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'leitner',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    FlashcardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
