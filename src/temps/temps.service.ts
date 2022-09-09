import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateTemps, { Temps } from './temps.entity';

@Injectable()
export class TempsService {

    constructor(
        @InjectRepository(Temps) private tempsRepository: Repository<Temps>,
      ) {}



      // find all
  getAllTemps() {
    return this.tempsRepository.find();
  }

  // create
  async createTemps(temps: CreateTemps) {
    const newTemps = await this.tempsRepository.create(temps);
    await this.tempsRepository.save(newTemps);

    return newTemps;
  }

}




