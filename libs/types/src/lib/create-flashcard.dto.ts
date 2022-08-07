import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFlashcardDto {
  @ApiProperty({
    example: 'Home',
    description: 'The word you want to create a flashcard from.',
  })
  @IsNotEmpty()
  word: string;

  @ApiProperty({
    example: 'The house, apartment, or place where you live.',
    description: 'The translate.',
  })
  translate: string;

  @ApiProperty({
    description: 'Optional',
  })
  description?: string;
}
