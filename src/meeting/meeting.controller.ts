import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting.entity';
import { CreateMeetingDto } from './create-meeting.dto';

@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Meeting | undefined> {
    return this.meetingService.findOne(id);
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
