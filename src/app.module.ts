import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TicketsModule } from './ticket/tickets.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [DatabaseModule, TicketsModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
