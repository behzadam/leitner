import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import {
  CreateFlashcardDto,
  UpdateFlashcardDto,
} from '@leitner/types';
import { ApiTags } from '@nestjs/swagger';

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
  findAll() {
    return this.flashcardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flashcardsService.findOne(Number(id));
  }

  @Patch(':id')
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
