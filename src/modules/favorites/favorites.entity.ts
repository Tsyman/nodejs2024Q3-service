import { Album } from '../albums/albums.entity';
import { Artist } from '../artists/artists.entity';
import { Track } from '../tracks/tracks.entity';

export class Favorites {
  artists: string[]; // favorite artists ids
  albums: string[]; // favorite albums ids
  tracks: string[]; // favorite tracks ids
  constructor() {
    this.artists = [];
    this.albums = [];
    this.tracks = [];
  }
}

export class FavoritesResponse {
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
  constructor() {
    this.artists = [];
    this.albums = [];
    this.tracks = [];
  }
}
