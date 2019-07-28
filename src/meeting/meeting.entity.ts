import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CreateMeetingDto } from './create-meeting.dto';
import { Availability } from '../availability/availability.entity';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column({type: 'text', nullable: true})
  description: string;

  @Column('text')
  dates: string;

  @Column({ length: 16 })
  startTime: string;

  @Column({ length: 16 })
  endTime: string;

  @OneToMany(type => Availability, availability => availability.meeting)
  availabilities: Availability[];

  static fromDto(dto: CreateMeetingDto): Meeting {
    const meeting = new Meeting();
    meeting.name = dto.details.name;
    meeting.description = dto.details.description;
    meeting.dates = dto.dates.toString();
    meeting.startTime = dto.startTime;
    meeting.endTime = dto.endTime;

    return meeting;
  }
}
