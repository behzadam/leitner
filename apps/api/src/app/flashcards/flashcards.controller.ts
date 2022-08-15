import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  DefaultValuePipe,
  Query,
  ParseIntPipe,
  Logger,
} from '@nestjs/common';

import {
  CreateFlashcardDto,
  UpdateFlashcardDto,
  FlashcardListItemDto,
} from '@shared/types';

import { FlashcardsService } from './flashcards.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse, ApiResponse } from '../../common';
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags('Flashcards')
@Controller('flashcards')
export class FlashcardsController {
  constructor(
    private readonly flashcardsService: FlashcardsService
  ) {}

  @Post()
  create(@Body() createFlashcardDto: CreateFlashcardDto) {
    return this.flashcardsService.create(createFlashcardDto);
  }

  @Get()
  @ApiPaginatedResponse(FlashcardListItemDto)
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit = 10
  ): Promise<Pagination<FlashcardListItemDto>> {
    const results = await this.flashcardsService.paginate({
      page: page,
      limit: limit,
      route: '',
    });
    return results;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flashcardsService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiResponse(FlashcardListItemDto)
  update(
    @Param('id') id: string,
    @Body() updateFlashcardDto: UpdateFlashcardDto
  ) {
    return this.flashcardsService.update(
      Number(id),
      updateFlashcardDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flashcardsService.remove(Number(id));
  }
}
