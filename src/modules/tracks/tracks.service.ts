import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CreateTrackDto, UpdateTrackDto } from '../tracks/tracks.payload';

@Injectable()
export class TracksService {
  constructor(private db: DbService) {}

  create(createTrackDto: CreateTrackDto) {
    return this.db.createTrack(createTrackDto);
  }

  findAll() {
    return this.db.findAllTracks();
  }

  findOne(id: string) {
    return this.db.findTrackById(id);
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return this.db.updateTrack(id, updateTrackDto);
  }

  remove(id: string) {
    return this.db.removeTrackById(id);
  }
}
