import { Injectable, Inject } from '@nestjs/common';
import Ticket from './Ticket';

@Injectable()
export class TicketsService {
  constructor(
    @Inject('TICKETS_REPOSITORY')
    private ticketsRepository: typeof Ticket,
  ) {}

  async findByEventId(eventId: number): Promise<Ticket[]> {
    return this.ticketsRepository.findAll<Ticket>({ where: { eventId } });
  }
}
