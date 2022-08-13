import { Injectable, Logger } from '@nestjs/common';
import {
  CreateFlashcardDto,
  UpdateFlashcardDto,
} from '@shared/types';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlashcardListItemDto } from '@shared/types';
import { Flashcard } from './entities/flashcard.entity';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private repository: Repository<Flashcard>
  ) {}

  async paginate(
    options: IPaginationOptions
  ): Promise<Pagination<Flashcard>> {
    const queryBuilder = await this.repository.createQueryBuilder(
      'q'
    );
    queryBuilder.orderBy('q.word', 'DESC');
    return paginate<Flashcard>(queryBuilder, options);
  }

  async create(createFlashcardDto: CreateFlashcardDto) {
    return await this.repository.save(createFlashcardDto);
  }

  async findAll(): Promise<FlashcardListItemDto[]> {
    const flashcards: Flashcard[] = await this.repository.find();
    return flashcards.map((entity: Flashcard) =>
      this.toFlashcardListItemDto(entity)
    );
  }

  async findOne(id: number): Promise<FlashcardListItemDto> {
    const flashcard: Flashcard = await this.repository.findOneBy({
      id,
    });
    return this.toFlashcardListItemDto(flashcard);
  }

  async update(
    id: number,
    updateFlashcardDto: UpdateFlashcardDto
  ): Promise<FlashcardListItemDto> {
    const flashcard: Flashcard = await this.repository.save({
      ...updateFlashcardDto,
      id,
    });
    return this.toFlashcardListItemDto(flashcard);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }

  toFlashcardListItemDto(entity: Flashcard): FlashcardListItemDto {
    const dto = new FlashcardListItemDto();
    dto.id = entity.id;
    dto.word = entity.word;
    dto.translate = entity.translate;
    dto.description = entity.description;
    return dto;
  }
}
