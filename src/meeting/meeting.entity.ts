import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateMeetingDto } from './create-meeting.dto';

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

  static fromDto(dto: CreateMeetingDto): Meeting {
    const meeting = new Meeting();
    meeting.name = dto.name;
    meeting.dates = dto.dates;
    meeting.description = dto.description;
    meeting.startTime = dto.startTime;
    meeting.endTime = dto.endTime;

    return meeting;
  }
}
