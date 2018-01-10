import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Buyer } from '../models/models';

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

	newMember: Buyer = {
		firstName: "",
		lastName: "",
		address: {
			street: "",
			city: "",
			state: "",
			zip: ""
		},
		phoneNumber: "",
		email: ""
	};

	myForm: FormGroup;

	receiveEmails: boolean = false;

	constructor(fb: FormBuilder) { 
		this.myForm = fb.group){this.newMember}
	}

  	ngOnInit() {
  	}

  	register(){
  		//Add user to database

  		//If receiveEmails, add user to mailing list


  		/*let regiserInputs = new FormGroup({
  			firstName: new FormControl(this.newMember.firstName),
  			lastame: new FormControl(this.newMember.lastName),
  			address: new FormControl(this.newMember.address),
  			phoneNumber: new FormControl(this.newMember.phoneNumber),
  			email: new FormControl(this.newMember.email)

  		}) */

  		onSubmit(form: any): void {
  			
  		}
  	}

}
