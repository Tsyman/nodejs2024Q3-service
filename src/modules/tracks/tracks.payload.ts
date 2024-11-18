import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateTrackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  duration: number;

  artistId: string | null;
  albumId: string | null;
}

export class UpdateTrackDto extends PartialType(CreateTrackDto) {}

export class UUIDv4 {
  @IsUUID(4)
  id: string;
}
