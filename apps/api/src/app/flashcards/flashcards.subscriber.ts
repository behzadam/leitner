/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, Logger } from '@nestjs/common';
import { InsertEvent } from 'typeorm';
import { EventSubscriber } from 'typeorm/decorator/listeners/EventSubscriber';
import { EntitySubscriberInterface } from 'typeorm/subscriber/EntitySubscriberInterface';
import { UpdateEvent } from 'typeorm/subscriber/event/UpdateEvent';
import { Flashcard } from './entities/flashcard.entity';
import { FlashcardHistory } from './entities/flashcard.history.entity';

@Injectable()
@EventSubscriber()
export class FlashcardSubscriber
  implements EntitySubscriberInterface<Flashcard>
{
  constructor() {}

  listenTo() {
    return Flashcard;
  }

  async onSave(
    event: InsertEvent<Flashcard> | UpdateEvent<Flashcard>
  ): Promise<void> {
    try {
      const flashcardHistory = new FlashcardHistory();
      flashcardHistory.word = event.entity.word;
      flashcardHistory.translate = event.entity.translate;
      flashcardHistory.description = event.entity.description;
      flashcardHistory.flashcard = event.entity as Flashcard;
      flashcardHistory.flashcardId = event.entity.id;
      await event.manager.save(flashcardHistory);
    } catch (error) {
      Logger.error(error);
    }
  }

  async afterInsert(event: InsertEvent<Flashcard>) {
    await this.onSave(event);
  }

  async beforeUpdate(event: UpdateEvent<Flashcard>) {
    await this.onSave(event);
  }
}
