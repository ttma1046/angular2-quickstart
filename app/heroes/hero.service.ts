import { Injectable } from '@angular/core';
import { HEROES }     from './mock-heroes';

import { Logger } from '../logger.service';

@Injectable()
export class HeroService {
  getHeroes() { 
      this.logger.log('Getting heroes ...');

      return HEROES;  
    }
  /**
   *
   */
  constructor(private logger: Logger) {
      
  }
}
