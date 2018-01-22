import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Roles } from './models/roles';
import { Volunteer, User } from './models/models';

@Injectable()
export class AuthService {

	currentUser: User = {firstName: "", lastName: "", _id: "", role: "", hasAuth: false};
	constructor(private http: HttpClient) { }

	loadUserTable(ref: string){
		return this.http.get<User[]>('http://localhost:8080/api/list/' + ref);
	}

	userLogin(requestBody){
		return this.http.post<any>('http://localhost:8080/api/profile/login', requestBody);
	}

	setCurrentUser(user: User): void {
		if(user.hasAuth){
			this.currentUser = user;
		}
	}

	logoutCurrentUser(): void {
		this.currentUser = {firstName: "", lastName: "", _id: "", role: "", hasAuth: false};
	}

	isLoggedIn(): boolean {
		return this.currentUser.hasAuth;
	}

}
