import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meeting } from './meeting.entity';
import { CreateMeetingDto } from './create-meeting.dto';

@Injectable()
export class MeetingService {
  constructor(
    @InjectRepository(Meeting)
    readonly meetingRepository: Repository<Meeting>,
  ) {}

  findAll(): Promise<Meeting[]> {
    return this.meetingRepository.find();
  }

  findOne(id: number): Promise<Meeting | undefined> {
    return this.meetingRepository.findOne(id);
  }

  createMeeting(meetingDto: CreateMeetingDto): Promise<Meeting> {
    const meeting = Meeting.fromDto(meetingDto);
    return this.meetingRepository.save(meeting);
  }
}
