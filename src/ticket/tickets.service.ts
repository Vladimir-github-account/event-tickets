import { Injectable, Inject } from '@nestjs/common';
import Ticket from './Ticket';
import { CreateTicketDto } from './dto/create.dto';

@Injectable()
export class TicketsService {
  constructor(
    @Inject('TICKETS_REPOSITORY')
    private ticketsRepository: typeof Ticket,
  ) {}

  async findByEventId(eventId: number): Promise<Ticket[]> {
    return this.ticketsRepository.findAll<Ticket>({ where: { eventId } });
  }

  async create(dto: CreateTicketDto) {
    return this.ticketsRepository.create({ ...dto });
  }
}
