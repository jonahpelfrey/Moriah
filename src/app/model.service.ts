import { Injectable } from '@angular/core';
import { User } from './models/models';

@Injectable()
export class ModelService {

  	constructor() { }

    emptyUser(): User {
  		return {firstName: "", lastName: "", _id: "", role: "", hasAuth: false};
  	}

}
