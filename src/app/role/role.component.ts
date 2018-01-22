import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ModelService } from '../model.service';
import { User, Role } from '../models/models';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {

	private users: Array<User> = [];
	private selectedUser: User;

	roles: Array<Role> = [
		{name: "Administrator", ref: "admins"},
		{name: "Artist", ref: "artists"},
		{name: "Cashier", ref: "cashiers"},
		{name: "Office Personnel", ref: "office"},
		{name: "Order Writer", ref: "writers"}
	];

	tempAdmins: Array<User> = [
		{firstName: "Tom", lastName: "Johnson", _id: "123454", role: "admins", hasAuth: false},
		{firstName: "Lisa", lastName: "Tenzer", _id: "123454", role: "admins", hasAuth: false},
		{firstName: "Jonah", lastName: "Pelfrey", _id: "123454", role: "admins", hasAuth: false},
		{firstName: "Greg", lastName: "Campbell", _id: "123454", role: "admins", hasAuth: false},
	];

	tempCashiers: Array<User> = [
		{firstName: "Jane", lastName: "Doe", _id: "123454", role: "cashiers", hasAuth: false},
		{firstName: "Jamie", lastName: "Rothberg", _id: "123454", role: "cashiers", hasAuth: false},
		{firstName: "Robert", lastName: "Smith", _id: "123454", role: "cashiers", hasAuth: false},
		{firstName: "Thomas", lastName: "Jefferson", _id: "123454", role: "cashiers", hasAuth: false},
	];

	tempOffice: Array<User> = [
		{firstName: "Nick", lastName: "Kratchmer", _id: "123454", role: "office", hasAuth: false},
		{firstName: "James", lastName: "Olson", _id: "123454", role: "office", hasAuth: false},
		{firstName: "David", lastName: "Robinson", _id: "123454", role: "office", hasAuth: false},
		{firstName: "Marshall", lastName: "Brown", _id: "123454", role: "office", hasAuth: false},
	];

	tempWriters: Array<User> = [
		{firstName: "Alex", lastName: "Duchon", _id: "123454", role: "writers", hasAuth: false},
		{firstName: "Jennifer", lastName: "Garner", _id: "123454", role: "writers", hasAuth: false},
		{firstName: "Steve", lastName: "Tenzer", _id: "123454", role: "writers", hasAuth: false},
		{firstName: "John", lastName: "Adams", _id: "123454", role: "writers", hasAuth: false},
	];

	tempArtists: Array<User> = [
		{firstName: "Frank", lastName: "Kelly", _id: "123454", role: "artists", hasAuth: false},
		{firstName: "Jim", lastName: "Hawthorne", _id: "123454", role: "artists", hasAuth: false},
		{firstName: "Julia", lastName: "Sherek", _id: "123454", role: "artists", hasAuth: false},
		{firstName: "Abby", lastName: "Pasiuk", _id: "123454", role: "artists", hasAuth: false},
	];

	tempUsers: Array<User> = [];

	selectedRef: string = this.roles[0].ref;
	password: string = "";
	allowLogin: boolean = false;

	constructor(private auth: AuthService, private modelService: ModelService) {}

  	ngOnInit() {this.selectedUser = this.modelService.emptyUser();}

  	attemptLogin(): void {
  		let requestBody = {id: this.selectedUser._id, password: this.password};
  		this.auth.userLogin(requestBody).subscribe(
  			res => { this.loginSuccess(res); }, 
  			err => { this.loginError(); }
  		);
  	}

  	loadUsers(): void {
  		this.auth.loadUserTable(this.selectedRef).subscribe(res => {
  			this.users = this.sortUsers(res);
  		});
  	}

  	loginError(): void {
  		this.password = "";
  		this.selectedUser = this.modelService.emptyUser();
  		console.log("Failed to login");
  	}

  	loginSuccess(result): void {
  		this.password = "";
  		this.selectedUser = result.user;
  		this.selectedUser.hasAuth = true;

  		this.auth.setCurrentUser(this.selectedUser);
  		console.log(this.selectedUser);
  	}

  	onSelect(event){
  		this.selectedRef = event.target.value;
  		this.selectedUser = this.modelService.emptyUser();
  		this.allowLogin = false;
  	}

  	selectUser(index: number): void {
  		this.selectedUser = this.users[index];
  		this.allowLogin = true;
  	}

  	tempSelectUser(index: number): void {
  		this.selectedUser = this.tempUsers[index];
  		this.allowLogin = true;
  	}

  	tempLoadUsers(): void {
  		if(this.selectedRef === "admins"){
  			this.tempUsers = this.sortUsers(this.tempAdmins);
  		}
  		else if(this.selectedRef === "artists"){
  			this.tempUsers = this.sortUsers(this.tempArtists);
  		} 
  		else if(this.selectedRef === "cashiers"){
  			this.tempUsers = this.sortUsers(this.tempCashiers);
  		}
  		else if(this.selectedRef === "office"){
  			this.tempUsers = this.sortUsers(this.tempOffice);
  		}
  		else if(this.selectedRef === "writers"){
  			this.tempUsers = this.sortUsers(this.tempWriters);
  		}
  	}

  	sortUsers(values: Array<User>): Array<User> {
  		values.sort((a, b): number => {
  			if(a.lastName < b.lastName) { return -1; }
  			else if(a.lastName > b.lastName) { return 1; }
  			else { return 0; }
  		});

  		return values;
  	}

}
