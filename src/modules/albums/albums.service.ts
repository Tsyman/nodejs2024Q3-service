import { Injectable } from '@nestjs/common';
import { CreateAlbumDto, UpdateAlbumDto } from '../albums/albums.payload';
import { PrismaService } from 'src/modules/prisma/prisma.services';

@Injectable()
export class AlbumsService {
  constructor(private db: PrismaService) {}

  async create(createAlbumDto: CreateAlbumDto) {
    return await this.db.createAlbum(createAlbumDto);
  }

  async findAll() {
    return await this.db.findAllAlbums();
  }

  async findOne(id: string) {
    return await this.db.findAlbumById(id);
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return await this.db.updateAlbum(id, updateAlbumDto);
  }

  async remove(id: string) {
    return await this.db.removeAlbumById(id);
  }
}
