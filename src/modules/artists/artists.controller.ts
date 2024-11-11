import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { UUIDv4 } from '../artists/artists.payload';
import { ArtistsService } from '../artists/artists.service';
import { CreateArtistDto, UpdateArtistDto } from '../artists/artists.payload';

@Controller('artist')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param() param: UUIDv4) {
    const existArtist = this.artistsService.findOne(param.id);
    if (existArtist) {
      return existArtist;
    }
    throw new NotFoundException('Artist not found');
  }

  @Put(':id')
  @HttpCode(200)
  update(@Param() param: UUIDv4, @Body() updateArtistDto: UpdateArtistDto) {
    const { updatedArtist, error } = this.artistsService.update(
      param.id,
      updateArtistDto,
    );
    if (updatedArtist) return updatedArtist;
    throw error;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() param: UUIDv4) {
    if (!this.artistsService.remove(param.id)) {
      throw new NotFoundException('Artist not found');
    }
  }
}
