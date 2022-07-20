import { Module } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsController } from './flashcards.controller';

@Module({
  controllers: [FlashcardsController],
  providers: [FlashcardsService],
})
export class FlashcardsModule {}
