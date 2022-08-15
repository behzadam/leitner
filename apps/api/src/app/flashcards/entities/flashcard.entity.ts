import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Flashcard extends BaseEntity {
  @ApiProperty({
    description: 'Primary key as Flashcard ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Title of flashcard',
    example: 'Hello',
  })
  @Column()
  word: string;

  @ApiProperty({
    description: 'Translate of flashcard',
    example: 'Hallo',
  })
  @Column()
  translate: string;

  @ApiProperty({
    description: 'Description',
    example: 'Description',
  })
  @Column()
  description: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
