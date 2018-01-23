import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Roles } from './models/roles';
import { Volunteer, User, Permissions } from './models/models';

@Injectable()
export class AuthService {

	currentUser: User = {
		firstName: "", 
		lastName: "", _id: "", 
		role: "", 
		hasAuth: false
	};
	
	permissions: Permissions = {
		viewInvoices: false,
		viewPersonalInvoices: false,
		createInvoices: false,
		editInvoices: false,
		addNewNonMembers: false,
		performAdminTasks: false,
		processPayments: false
	};

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
			this.setPermissions(this.currentUser);
		}
	}

	setPermissions(user: User): void {
		if(user.role === "admin"){
			this.permissions = {
				viewInvoices: true,
				viewPersonalInvoices: false,
				createInvoices: true,
				editInvoices: true,
				addNewNonMembers: true,
				performAdminTasks: true,
				processPayments: true
			};
		}
		else if(user.role === "artist"){
			this.permissions = {
				viewInvoices: false,
				viewPersonalInvoices: true,
				createInvoices: false,
				editInvoices: false,
				addNewNonMembers: false,
				performAdminTasks: false,
				processPayments: false
			};
		}
		else if(user.role === "cashier"){
			this.permissions = {
				viewInvoices: true,
				viewPersonalInvoices: false,
				createInvoices: false,
				editInvoices: false,
				addNewNonMembers: false,
				performAdminTasks: false,
				processPayments: true
			};
		}
		else if(user.role === "office"){
			this.permissions = {
				viewInvoices: true,
				viewPersonalInvoices: false,
				createInvoices: false,
				editInvoices: false,
				addNewNonMembers: false,
				performAdminTasks: false,
				processPayments: false
			};
		}
		else if(user.role === "writer"){
			this.permissions = {
				viewInvoices: true,
				viewPersonalInvoices: false,
				createInvoices: true,
				editInvoices: false,
				addNewNonMembers: true,
				performAdminTasks: false,
				processPayments: false
			};
		}

	}

	logoutCurrentUser(): void {
		this.currentUser = {firstName: "", lastName: "", _id: "", role: "", hasAuth: false};
	}

	isLoggedIn(): boolean {
		return this.currentUser.hasAuth;
	}

}
