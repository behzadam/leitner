import { Injectable } from '@nestjs/common';
import {
  CreateFlashcardDto,
  UpdateFlashcardDto,
} from '@leitner/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { Repository } from 'typeorm';

import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private repository: Repository<Flashcard>
  ) {}

  async paginate(
    options: IPaginationOptions
  ): Promise<Pagination<Flashcard>> {
    const queryBuilder = this.repository.createQueryBuilder('q');
    queryBuilder.orderBy('q.word', 'DESC');

    return paginate<Flashcard>(queryBuilder, options);
  }

  create(createFlashcardDto: CreateFlashcardDto) {
    return this.repository.save(createFlashcardDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return this.repository.save({ updateFlashcardDto, id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
