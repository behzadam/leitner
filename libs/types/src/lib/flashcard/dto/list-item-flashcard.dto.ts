import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFlashcardDto } from './create-flashcard.dto';

export class FlashcardListItemDto extends PartialType(
  CreateFlashcardDto
) {
  @ApiProperty()
  id: number;
}
