import { Controller, Get, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import Ticket from './Ticket';

@Controller('/tickets')
export class TicketController {
  constructor(private ticketsService: TicketsService) {}
  @Get(':eventId')
  getOne(@Param('eventId') eventId: number): Promise<Ticket[]> {
    return this.ticketsService.findByEventId(eventId);
  }
}
