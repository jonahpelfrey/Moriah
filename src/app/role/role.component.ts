import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Member, Role } from '../models/models';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {

	members: Array<Member> = [];

	roles: Array<Role> = [
		{name: "Administrator", ref: "admins"},
		{name: "Artist", ref: "artists"},
		{name: "Cashier", ref: "cashiers"},
		{name: "Office Personnel", ref: "office"},
		{name: "Order Writer", ref: "writers"}
	];

	selectedUser: Member = {firstName: "", lastName: "", _id: ""};
	selectedRef: string = this.roles[0].ref;
	password: string = "";

	constructor(private auth: AuthService) { }

  	ngOnInit() {}

  	attemptLogin(): void {
  		let requestBody = {id: this.selectedUser._id, password: this.password};
  		this.auth.userLogin(requestBody).subscribe(
  			res => { this.loginSuccess(); }, 
  			err => { this.loginError(err); }
  		);
  	}

  	loadUsers(): void {
  		this.auth.loadUserTable(this.selectedRef).subscribe(res => {
  			this.members = this.sortMembers(res);
  		});
  	}

  	loginError(error): void {
  		this.password = "";
  		console.log("Failed to login");
  	}

  	loginSuccess(): void {
  		this.password = "";
  		console.log("Logged in successfully");
  	}

  	onSelect(event){
  		this.selectedRef = event.target.value;
  		this.selectedUser = {firstName: "", lastName: "", _id: ""};
  	}

  	selectMember(index: number): void {
  		this.selectedUser = this.members[index];
  	}

  	sortMembers(values: Array<Member>): Array<Member> {
  		values.sort((a, b): number => {
  			if(a.lastName < b.lastName) { return -1; }
  			else if(a.lastName > b.lastName) { return 1; }
  			else { return 0; }
  		});

  		return values;
  	}

}
