import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CreateAvailabilityDto } from './create-availability.dto';
import { Meeting } from '../meeting/meeting.entity';

@Entity()
export class Availability {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 64 })
  name: string;

  @Column('text')
  times: string;

  @ManyToOne(type => Meeting, meeting => meeting.availabilities)
  meeting: Meeting;

  static fromDto(dto: CreateAvailabilityDto): Availability {
    const availability = new Availability();
    availability.name = dto.name;
    availability.times = dto.times.toString();

    return availability;
  }
}
