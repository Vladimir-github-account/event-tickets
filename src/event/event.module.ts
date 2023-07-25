import { Module } from '@nestjs/common';
import { eventsProviders } from './event.providers';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  providers: [...eventsProviders, EventService],
  controllers: [EventController],
})
export class EventModule {}
