import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Flashcard } from './flashcard.entity';

@Entity()
export class FlashcardHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @Column()
  translate: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Flashcard)
  @JoinColumn()
  flashcard: Flashcard;

  @Column()
  flashcardId: number;
}
