import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules//users//users.module';
import { DbService } from './modules//db/db.service';
import { ArtistsModule } from './modules/artists//artists.module';

@Module({
  imports: [UsersModule, ArtistsModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
