export class CreateMeetingDto {
  readonly name: string;
  readonly description: string | null;
  readonly dates: string;
  readonly startTime: string;
  readonly endTime: string;
}
