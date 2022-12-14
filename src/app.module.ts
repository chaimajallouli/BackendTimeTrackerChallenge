import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TempsModule } from './temps/temps.module';
import {config}   from './orm.config'

@Module({
  imports: [TypeOrmModule.forRoot(config), TempsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
