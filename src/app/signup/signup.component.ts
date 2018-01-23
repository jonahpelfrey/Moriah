import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

import { Buyer, PhoneNumber, ApiResponse } from '../models/models';
import { DataService } from '../services/data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	readonly states: string[] = [
		"Alabama",
		"Alaska",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"Florida",
		"Georgia",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"Nebraska",
		"Nevada",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"New York",
		"North Carolina",
		"North Dakota",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Pennsylvania",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Vermont",
		"Virginia",
		"Washington",
		"West Virginia",
		"Wisconsin",
		"Wyoming"
	];

	receiveEmails: boolean = false;
	phoneNumber: PhoneNumber = {
		first: "",
		second: "",
		third: ""
	};

	newMember: Buyer = {
		firstName: "",
		lastName: "",
		address: {
			first: "",
			second: "",
			city: "",
			state: "",
			zip: "",		
		},
		phoneNumber: "",
		email: "",
		_id: ""
	};

	constructor(private dataService: DataService, private auth: AuthService) {}

  	ngOnInit() {
  	}

  	formatPhoneNumber() {
  		return this.phoneNumber.first + this.phoneNumber.second + this.phoneNumber.third;
  	}

  	register(){
  		this.newMember.phoneNumber = this.formatPhoneNumber();

  		this.dataService.addBuyer(this.newMember).subscribe(
  			data => {
  				if(data.error) { this.handleErrorResponse(data.error); } 
  				else { this.handleSuccessResponse(data); }
  			},
  			err => {
  				console.log(err);
  				this.handleErrorResponse("There was an internal error processing your request");
  			}
  		);
  	}

  	handleErrorResponse(message: string){
  		console.log(message);
  	}

  	handleSuccessResponse(data: ApiResponse){
  		console.log(data);
  	}

}
