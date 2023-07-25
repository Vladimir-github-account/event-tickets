import { Injectable, Inject } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import Event from './Event';

@Injectable()
export class EventService {
  constructor(
    @Inject('EVENTS_REPOSITORY')
    private eventsRepository: typeof Event,
  ) {}

  async create(dto: CreateDto) {
    return this.eventsRepository.create({
      title: dto.title,
    });
  }
}
