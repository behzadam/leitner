import { Module } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsController } from './flashcards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { FlashcardHistory } from './entities/flashcard.history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flashcard, FlashcardHistory])],
  controllers: [FlashcardsController],
  providers: [FlashcardsService],
})
export class FlashcardsModule {}
