import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Flashcard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @Column()
  translate: string;

  @Column()
  description: string;
}
