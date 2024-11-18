import { Injectable } from '@nestjs/common';
import { CreateArtistDto, UpdateArtistDto } from './artists.payload';
import { PrismaService } from 'src/modules/prisma/prisma.services';

@Injectable()
export class ArtistsService {
  constructor(private db: PrismaService) {}

  async create(createArtistDto: CreateArtistDto) {
    return await this.db.createArtist(createArtistDto);
  }

  async findAll() {
    return await this.db.findAllArtists();
  }

  async findOne(id: string) {
    return await this.db.findArtistById(id);
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    return await this.db.updateArtist(id, updateArtistDto);
  }

  async remove(id: string) {
    return await this.db.removeArtistById(id);
  }
}
