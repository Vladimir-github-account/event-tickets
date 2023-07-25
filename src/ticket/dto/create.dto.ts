import { IsNumber, Min, IsString, IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  row: string;
  @IsNotEmpty()
  @IsString()
  section: string;
  @Min(1)
  @IsNumber()
  eventId: number;
  @Min(1)
  @IsNumber()
  seat_number: number;
  @IsNumber()
  price: number;
}
