import { Injectable, Logger } from '@nestjs/common';
import {
  COPYRIGHT_TEXT,
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
  ): Promise<Pagination<FlashcardListItemDto>> {
    const queryBuilder = this.repository.createQueryBuilder('q');
    queryBuilder.orderBy('q.createdAt', 'ASC');
    const results = await paginate<Flashcard>(queryBuilder, options);
    const items = results.items.map((entity: Flashcard) =>
      this.toFlashcardListItemDto(entity)
    );
    return new Pagination<FlashcardListItemDto>(
      items,
      results.meta,
      results.links
    );
  }

  async create(createFlashcardDto: CreateFlashcardDto) {
    if (createFlashcardDto.description) {
      createFlashcardDto.description =
        createFlashcardDto.description.concat(' ', COPYRIGHT_TEXT);
    }
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
    dto.createdAt = entity.createdAt;
    return dto;
  }
}
