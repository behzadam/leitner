import { Injectable } from '@nestjs/common';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';

@Injectable()
export class FlashcardsService {
  create(createFlashcardDto: CreateFlashcardDto) {
    return 'This action adds a new flashcard';
  }

  findAll() {
    return `This action returns all flashcards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flashcard`;
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return `This action updates a #${id} flashcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashcard`;
  }
}
