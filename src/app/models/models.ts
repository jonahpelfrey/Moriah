export interface Artist {

	firstName: string;
	lastName: string;
	_id: string;
}

export interface Volunteer {
	
	firstName: string;
	lastName: string;
}

export interface Buyer {

	_id: string;
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
	artistId: string;
	writerId: string;
	buyerId: string;
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

export interface User {
	firstName: string;
	lastName: string;
	_id: string;
	role: string;
	hasAuth: boolean;
}

export interface Role {
	name: string;
	ref: string;
}

export interface Permissions {
	viewInvoices: boolean;
	viewPersonalInvoices: boolean;
	createInvoices: boolean;
	editInvoices: boolean;
	processPayments: boolean;
	addNewNonMembers: boolean;
	performAdminTasks: boolean;
}


