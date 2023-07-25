import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import Ticket from './Ticket';
import { CreateTicketDto } from './dto/create.dto';

@Controller('/tickets')
export class TicketController {
  constructor(private ticketsService: TicketsService) {}
  @Get(':eventId')
  getOne(@Param('eventId', ParseIntPipe) eventId: number): Promise<Ticket[]> {
    if (eventId < 1) {
      throw new BadRequestException('eventId < 1');
    }
    return this.ticketsService.findByEventId(eventId);
  }
  @UsePipes(new ValidationPipe())
  @Post('/')
  create(@Body() dto: CreateTicketDto) {
    return this.ticketsService.create(dto);
  }
}
