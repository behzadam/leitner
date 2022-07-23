import { Injectable } from '@nestjs/common';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
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
    return this.flashcardsRepository.update(id, updateFlashcardDto);
  }

  remove(id: number) {
    return this.flashcardsRepository.delete(id);
  }
}
