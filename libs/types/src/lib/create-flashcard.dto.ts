import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateFlashcardDto {
  @IsNotEmpty()
  @ApiProperty()
  word: string;

  @ApiProperty()
  translate: string;

  @ApiProperty()
  description?: string;
}
