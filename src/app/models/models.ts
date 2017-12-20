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
		street: string;
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


