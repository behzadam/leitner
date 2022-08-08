import { Injectable } from '@nestjs/common';
import {
  CreateFlashcardDto,
  UpdateFlashcardDto,
} from '@leitner/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private flashcardsRepository: Repository<Flashcard>
  ) {}

  create(createFlashcardDto: CreateFlashcardDto) {
    return this.flashcardsRepository.save(createFlashcardDto);
  }

  findAll() {
    return this.flashcardsRepository.find();
  }

  findOne(id: number) {
    return this.flashcardsRepository.findOneBy({ id });
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return this.flashcardsRepository.save({ updateFlashcardDto, id });
  }

  remove(id: number) {
    return this.flashcardsRepository.delete(id);
  }
}
