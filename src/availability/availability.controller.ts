import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { Availability } from './availability.entity';
import { CreateAvailabilityDto } from './create-availability.dto';

import { Meeting } from '../meeting/meeting.entity';
import { MeetingByIdPipe } from '../meeting/meeting.pipe';

@Controller('meeting/:meetingID/availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Post()
  create(@Param('meetingID', MeetingByIdPipe) meeting: Meeting,
         @Body() createAvailabilityDto: CreateAvailabilityDto): Promise<Availability> {
    return this.availabilityService.createAvailability(createAvailabilityDto, meeting);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.availabilityService.delete(id).then();
  }
}
