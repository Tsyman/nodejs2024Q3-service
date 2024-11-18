import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { TracksModule } from './modules/tracks/tracks.module';
import { DbModule } from './modules/db/db.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [
    UsersModule,
    ArtistsModule,
    AlbumsModule,
    TracksModule,
    DbModule,
    FavoritesModule,
    PrismaModule,
  ],
  providers: [AppService],
})
export class AppModule {}
