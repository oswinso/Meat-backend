import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting.entity';
import { CreateMeetingDto } from './create-meeting.dto';
import { MeetingByIdPipe } from './meeting.pipe';
import { StripAvailabilityIdPipe } from '../availability/availability.pipe';

@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Get(':id')
  findOne(@Param('id', MeetingByIdPipe, StripAvailabilityIdPipe) meeting: Meeting): Meeting {
    return meeting;
  }

  @Get()
  findAll(): Promise<Meeting[]> {
    return this.meetingService.findAll();
  }

  @Post()
  createMeeting(@Body() createMeetingDto: CreateMeetingDto): Promise<Meeting> {
    return this.meetingService.createMeeting(createMeetingDto);
  }
}
