import { Module } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { Availability } from './availability.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvailabilityController } from './availability.controller';
import { MeetingModule } from '../meeting/meeting.module';

@Module({
  imports: [TypeOrmModule.forFeature([Availability]), MeetingModule],
  providers: [AvailabilityService],
  controllers: [AvailabilityController],
})
export class AvailabilityModule {}
