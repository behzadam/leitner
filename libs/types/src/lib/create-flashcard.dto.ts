import { IsNotEmpty } from 'class-validator';

export class CreateFlashcardDto {
  @IsNotEmpty()
  word: string;
  translate: string;
  description?: string;
}
