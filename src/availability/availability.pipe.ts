import { PipeTransform, Injectable, ArgumentMetadata, ParseIntPipe } from '@nestjs/common';
import { Meeting } from '../meeting/meeting.entity';

@Injectable()
export class StripAvailabilityIdPipe implements PipeTransform<Meeting> {
  transform(meeting: Meeting, metadata: ArgumentMetadata): Meeting {
    meeting.availabilities.forEach(availability => {
      delete availability.id;
    });
    return meeting;
  }
}
