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

	users: Array<User> = [];
	selectedUser: User;

	roles: Array<Role> = [
		{name: "Administrator", ref: "admins"},
		{name: "Artist", ref: "artists"},
		{name: "Cashier", ref: "cashiers"},
		{name: "Office Personnel", ref: "office"},
		{name: "Order Writer", ref: "writers"}
	];

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
  		console.log(this.auth.currentUser);
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

  	sortUsers(values: Array<User>): Array<User> {
  		values.sort((a, b): number => {
  			if(a.lastName < b.lastName) { return -1; }
  			else if(a.lastName > b.lastName) { return 1; }
  			else { return 0; }
  		});

  		return values;
  	}

}
