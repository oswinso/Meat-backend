import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAvailabilityDto } from './create-availability.dto';
import { Availability } from './availability.entity';
import { Meeting } from '../meeting/meeting.entity';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectRepository(Availability)
    readonly availabilityRepository: Repository<Availability>,
  ) {
  }

  createAvailability(availabilityDto: CreateAvailabilityDto, meeting: Meeting): Promise<Availability> {
    const availability = Availability.fromDto(availabilityDto);
    availability.meeting = meeting;
    return this.availabilityRepository.save(availability);
  }

  delete(id: string): Promise<any> {
    return this.availabilityRepository.delete(id);
  }
}
