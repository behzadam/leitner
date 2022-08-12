import { Module } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsController } from './flashcards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashcard } from '@shared/types';

@Module({
  imports: [TypeOrmModule.forFeature([Flashcard])],
  controllers: [FlashcardsController],
  providers: [FlashcardsService],
})
export class FlashcardsModule {}
