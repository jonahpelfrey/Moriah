import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	user: User = {
		username: "",
		password: ""
	};

	constructor(private auth: AuthService) { }

  	ngOnInit() {
  	}

  	login(): void {
  		if(this.user.username === "Moriah" && this.user.password === "md2018t!!"){
  			console.log("Logged in successfully");
  			this.user.username = "";
  			this.user.password = "";
  		} else {
  			console.log("That username and password combination is incorrect");
  		}
  	}

}
