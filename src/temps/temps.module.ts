import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TempsController } from './temps.controller';
import { Temps } from './temps.entity';
import { TempsService } from './temps.service';

@Module({
  imports: [TypeOrmModule.forFeature([Temps])],
  controllers: [TempsController],
  providers: [TempsService]
})
export class TempsModule {}
