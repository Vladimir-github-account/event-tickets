import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateDto } from './dto/create.dto';

@Controller('/event')
export class EventController {
  constructor(private eventService: EventService) {}

  @UsePipes(new ValidationPipe())
  @Post('/')
  create(@Body() dto: CreateDto) {
    console.log('dto', dto);
    return this.eventService.save(dto);
  }
}
