import { Injectable } from '@angular/core';

import { POSTS } from './mockchirps';
import { IChirps} from './chirps'

@Injectable()
export class DataService {

  constructor() { }

  getChirps(): Promise<IChirps[]> {
    return Promise.resolve(POSTS)
  }
  
}
