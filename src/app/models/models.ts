export interface Artist {

	firstName: string;
	lastName: string;
}

export interface Volunteer {
	
	firstName: string;
	lastName: string;
}

export interface Buyer {

	firstName: string;
	lastName: string;
	address: {
		first: string;
		second: string;
		city: string;
		state: string;
		zip: string;
	};
	phoneNumber: string;
	email: string;
}

export interface Order {

	refKey: number;
	artist: string;
	volunteer: string;
	buyer: string;
	date: string;
	description: string;
	price: number;
}

export interface Purchase {

	artDescription: string;
	price: number;
	shipping?: {
		shippingCost: number;
	}
	notes: string;
	paid: boolean;
	
}

export interface User {
	username: string;
	password: string;
}

export interface PhoneNumber {
	first: string;
	second: string;
	third: string;
}

export interface ApiResponse {
	message: string;
	error: string;
	result: any;
}

export interface Member {
	firstName: string;
	lastName: string;
	_id: string;
}

export interface Role {
	name: string;
	ref: string;
}


