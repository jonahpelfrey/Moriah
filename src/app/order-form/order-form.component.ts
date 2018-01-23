import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Artist, Volunteer, Buyer, Order, Purchase, User, Role } from '../models/models';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../services/data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

	roles: Array<Role> = [
		{name: "Artist", ref: "artists"},
		{name: "Buyer", ref: "buyers"},
		{name: "Order Writer", ref: "admins"},
	];

	writer: User;
	writers: Array<User> = [];
	hasWriter: boolean = false;

	buyer: Buyer;
	buyers: Array<Buyer> = [];
	hasBuyer: boolean = false;

	artist: Artist;
	artists: Array<Artist> = [];
	hasArtist: boolean = false;

	order: Order;

	constructor(private dataService: DataService, private auth: AuthService) { }

	ngOnInit() {
		if(this.auth.currentUser.hasAuth){
			this.hasWriter = true;
			this.writer = this.auth.currentUser;
		}
	}

	addArtist(artist: Artist): void {

	}

	addBuyer(buyer: Buyer): void {

	}

	addWriter(writer: User): void {

	}

	loadArtists(): void {
		this.dataService.getUsers('artists').subscribe(res => {

		});
	}
	loadBuyers(): void {}
	loadWriters(): void {}

	removeArtist(): void {}
	removeBuyer(): void {}
	removeWriter(): void {}

}
