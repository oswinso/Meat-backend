import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingModule } from './meeting/meeting.module';
import { AvailabilityModule } from './availability/availability.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MeetingModule, AvailabilityModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
