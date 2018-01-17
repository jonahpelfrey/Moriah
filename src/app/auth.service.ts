import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Roles } from './models/roles';
import { Volunteer, User, Member } from './models/models';

@Injectable()
export class AuthService {

	constructor(private http: HttpClient) { }

	loadUserTable(ref: string){
		return this.http.get<Member[]>('http://localhost:8080/api/list/' + ref);
	}

}
