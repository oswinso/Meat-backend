import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import { Meeting } from './meeting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Meeting])],
  providers: [MeetingService],
  controllers: [MeetingController],
})
export class MeetingModule {}
