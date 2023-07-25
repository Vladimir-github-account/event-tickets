import { Module } from '@nestjs/common';
import { eventsProviders } from './event.providers';

@Module({
  providers: [...eventsProviders],
})
export class EventModule {}
