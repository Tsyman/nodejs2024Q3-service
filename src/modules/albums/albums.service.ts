import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CreateAlbumDto, UpdateAlbumDto } from '../albums/albums.payload';

@Injectable()
export class AlbumsService {
  constructor(private db: DbService) {}

  create(createAlbumDto: CreateAlbumDto) {
    return this.db.createAlbum(createAlbumDto);
  }

  findAll() {
    return this.db.findAllAlbums();
  }

  findOne(id: string) {
    return this.db.findAlbumById(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.db.updateAlbum(id, updateAlbumDto);
  }

  remove(id: string) {
    return this.db.removeAlbumById(id);
  }
}
