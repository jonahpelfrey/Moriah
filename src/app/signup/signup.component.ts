import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

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
			zip: "",		
		},
		phoneNumber: "",
		email: ""
	};


	myForm: FormGroup = null;


	receiveEmails: boolean = false;

	constructor(fb: FormBuilder) { 
		this.myForm = fb.group({
			'firstName': ['', Validators.required],
			'lastName': ['', Validators.required], 
			'street': ['', Validators.required],
			'city': ['', Validators.required],
			'zip': ['', Validators.required],
			'phoneNumber1': ['', Validators.required],
			'phoneNumber2': ['', Validators.required],
			'phoneNumber3': ['', Validators.required],
			'email': ['', Validators.required]
		}); 

		//var _builder = new FormBuilder();
		//this.myForm = _builder.group({});
		//this.formGroup.addControl('firstName', new FormControl('',Validators.required));

	/*	var validationcollection = [];
		validationcollection.push(Validators.required);
		validationcollection.push(Validators.pattern("^[A-Z]{1,1[0-9]{4,4}$")); */

/*		this.newMember.firstName = this.myForm.controls['firstName'];
		this.newMember.lastName = this.myForm.controls['lastName'];
		this.newMember.address.street = this.myForm.controls['street'];
		this.newMember.address.city = this.myForm.controls['city'];
		this.newMember.address.zip = this.myForm.controls['zip'];
		this.newMember.phoneNumber1 = this.myForm.controls['phoneNumber1'];
		this.newMember.phoneNumber2 = this.myForm.controls['phoneNumber2'];
		this.newMember.phoneNumber3 = this.myForm.controls['phoneNumber3'];
		this.newMember.email = this.myForm.controls['email']; 
*/

		/*this.myForm.addControl('street', new FormControl('', Validators.compose(Validators.Validators.required))));
		this.myForm.addControl('address.city', new FormControl('', Validators.compose(Validators.required)));
		this.myForm.addControl('address.zip', new FormControl('', Validators.compose(Validators.required)));
		this.myForm.addControl('phoneNumber1', new FormControl('', Validators.compose(Validators.required)));
		this.myForm.addControl('phoneNumber2', new FormControl('', Validators.compose(Validators.required)));
		this.myForm.addControl('phoneNumber3', new FormControl('', Validators.compose(Validators.required)));
		this.myForm.addControl('email', new FormControl('', Validators.compose(Validators.required)))); */

	}

  	ngOnInit() {
  	}

  	register(){
  		//Add user to database

  		//If receiveEmails, add user to mailing list

  		
  	}

  	onSubmit(form: any) {
  		console.log("you registered with value: ", form)		
  	}

}
