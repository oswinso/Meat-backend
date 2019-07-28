import { PipeTransform, Injectable, ArgumentMetadata, ParseIntPipe } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting.entity';

@Injectable()
export class MeetingByIdPipe implements PipeTransform<string> {
  constructor(private readonly meetingService: MeetingService) {
  }

  transform(value: string, metadata: ArgumentMetadata): Promise<Meeting> {
    return new ParseIntPipe().transform(value, metadata)
      .then(id => {
        return this.meetingService.findOne(id);
      });
  }
}
