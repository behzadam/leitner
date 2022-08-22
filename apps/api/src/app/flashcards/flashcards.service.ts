import { Injectable, Logger } from '@nestjs/common';
import {
  COPYRIGHT_TEXT,
  CreateFlashcardDto,
  UpdateFlashcardDto,
  FlashcardListItemDto,
} from '@shared/types';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { FlashcardHistory } from './entities/flashcard.history.entity';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private repository: Repository<Flashcard>,
    @InjectRepository(FlashcardHistory)
    private historyRepository: Repository<FlashcardHistory>
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

  async create(
    createFlashcardDto: CreateFlashcardDto
  ): Promise<FlashcardListItemDto> {
    if (createFlashcardDto.description) {
      createFlashcardDto.description =
        createFlashcardDto.description.concat(' ', COPYRIGHT_TEXT);
    }
    const flashcard = await this.repository.save(createFlashcardDto);
    return this.toFlashcardListItemDto(flashcard);
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

  async findHistories(id: number): Promise<FlashcardListItemDto[]> {
    const histories = await this.historyRepository.find({
      where: {
        flashcardId: id,
      },
    });
    return histories.map((entity: FlashcardHistory) =>
      this.toFlashcardListItemDto(entity)
    );
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
    return await this.repository.softDelete(id);
  }

  toFlashcardListItemDto(
    entity: Flashcard | FlashcardHistory
  ): FlashcardListItemDto {
    const dto = new FlashcardListItemDto();
    dto.id = entity.id;
    dto.word = entity.word;
    dto.translate = entity.translate;
    dto.description = entity.description;
    dto.createdAt = entity.createdAt;
    return dto;
  }
}
