import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CreateArtistDto, UpdateArtistDto } from '../artists/artists.payload';

@Injectable()
export class ArtistsService {
  constructor(private db: DbService) {}

  create(createArtistDto: CreateArtistDto) {
    return this.db.createArtist(createArtistDto);
  }

  findAll() {
    return this.db.findAllArtists();
  }

  findOne(id: string) {
    return this.db.findArtistById(id);
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.db.updateArtist(id, updateArtistDto);
  }
  remove(id: string) {
    return this.db.removeArtistById(id);
  }
}
