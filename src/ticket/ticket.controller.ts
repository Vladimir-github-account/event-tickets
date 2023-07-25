import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import Ticket from './Ticket';

@Controller('/tickets')
export class TicketController {
  constructor(private ticketsService: TicketsService) {}
  @Get(':eventId')
  getOne(@Param('eventId') eventId: number): Promise<Ticket[]> {
    if (eventId < 1) {
      throw new BadRequestException('eventId < 1');
    }
    return this.ticketsService.findByEventId(eventId);
  }
}
