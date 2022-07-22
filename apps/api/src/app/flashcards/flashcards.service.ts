import { Injectable } from '@nestjs/common';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private flashcardRepository: Repository<Flashcard>
  ) {}

  create(createFlashcardDto: CreateFlashcardDto) {
    return this.flashcardRepository.save(createFlashcardDto);
  }

  findAll() {
    return this.flashcardRepository.find();
  }

  findOne(id: number) {
    return this.flashcardRepository.findOneBy({ id });
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return this.flashcardRepository.update(id, updateFlashcardDto);
  }

  remove(id: number) {
    return this.flashcardRepository.delete(id);
  }
}
