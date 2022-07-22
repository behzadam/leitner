import { ApiProperty } from '@nestjs/swagger';
export class CreateFlashcardDto {
  @ApiProperty({
    description: `this is the user who created the show`,
  })
  description: string;
}
