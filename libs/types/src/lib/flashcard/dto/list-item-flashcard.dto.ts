import { ApiProperty } from '@nestjs/swagger';

export class FlashcardListItemDto {
  @ApiProperty()
  word: string;

  @ApiProperty()
  translate: string;

  @ApiProperty()
  description?: string;
}
