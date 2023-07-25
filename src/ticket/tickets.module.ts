import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketsService } from './tickets.service';
import { ticketsProviders } from './ticket.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TicketController],
  providers: [TicketsService, ...ticketsProviders],
  exports: [TicketsService],
})
export class TicketsModule {}
