import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  artistId: string | null;
}

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {}

export class UUIDv4 {
  @IsUUID(4)
  id: string;
}
