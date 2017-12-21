import { Injectable } from '@angular/core';

import { Roles } from './models/roles';
import { Volunteer } from './models/models';

@Injectable()
export class AuthService {

	worker: Volunteer;
	role: any;
	loggedIn: boolean = false;

	constructor() { }

	login(username: string, password: string){

		//Hash password

		//Send username and password to backend to validate login

		//If successful, return true
	}

	logout(){

	}

}
