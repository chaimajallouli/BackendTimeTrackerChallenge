import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateTemps from './temps.entity';
import { TempsService } from './temps.service';

@Controller('temps')
export class TempsController {

    constructor(private readonly tempsService: TempsService) {}

    // get all temps
    @Get()
    getTemps() {
      return this.tempsService.getAllTemps();
    }
  

    // create temps
    @Post()
    async createTemps(@Body() temps: CreateTemps) {
      return this.tempsService.createTemps(temps);
    }
}
