import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Member, Role } from '../models/models';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
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

	selectedUser: Member = {firstName: "", lastName: ""};
	selectedRef: string = this.roles[0].ref;

	constructor(private auth: AuthService) { }

  	ngOnInit() {}

  	loadUsers(): void {
  		//Organize member list alphabetically by last name
  		this.auth.loadUserTable(this.selectedRef).subscribe(res => {
  			this.members = res;
  		});
  	}

  	selectMember(index: number): void {
  		this.selectedUser = this.members[index];
  	}

  	onSelect(event){
  		this.selectedRef = event.target.value;
  	}

}
