import { Injectable } from '@angular/core';
import { User, Artist } from './models/models';

@Injectable()
export class ModelService {

  	constructor() { }

  	emptyArtist(): Artist {
  		return {firstName: "", lastName: "", _id: ""};
  	}

    emptyUser(): User {
  		return {firstName: "", lastName: "", _id: "", role: "", hasAuth: false};
  	}


}
