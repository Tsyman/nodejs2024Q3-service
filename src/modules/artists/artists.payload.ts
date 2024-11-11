import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateArtistDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  grammy: boolean;
}

export class UpdateArtistDto extends CreateArtistDto {}

export class UUIDv4 {
  @IsUUID(4)
  id: string;
}
