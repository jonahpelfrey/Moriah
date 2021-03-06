import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Artist, Volunteer, Buyer, Order, ApiResponse, User } from '../models/models';

@Injectable()
export class DataService {

	private artistList: Artist[];
	private artists: BehaviorSubject<Artist[]> = new BehaviorSubject([]);
	public readonly artistsObs: Observable<Artist[]> = this.artists.asObservable();

	private buyerList: Buyer[];
	private buyers: BehaviorSubject<Buyer[]> = new BehaviorSubject([]);
	public readonly buyersObs: Observable<Buyer[]> = this.buyers.asObservable();

	private volunteerList: Volunteer[];
	private volunteers: BehaviorSubject<Volunteer[]> = new BehaviorSubject([]);
	public readonly volunteersObs: Observable<Volunteer[]> = this.volunteers.asObservable();

	private orderList: Order[];
	private orders: BehaviorSubject<Order[]> = new BehaviorSubject([]);
	public readonly ordersObs: Observable<Order[]> = this.orders.asObservable();

  //queryUrl: string = '?search=';

	constructor(private http: HttpClient) { }

	getUsers(ref: string) {
		return this.http.get<User[]>('http://localhost:8080/api/list/' + ref);
	}

  	addOrder(order: Order) {
		this.http.post('https://afmws.herokuapp.com/api/orders', order).subscribe((res: any) => {
			this.orderList.push(res.result);
			this.orders.next(this.orderList);
		}, err => console.log(err));
  	}
  	
  	getArtists() {
		this.http.get<Artist[]>('https://afmws.herokuapp.com/api/artists').subscribe(res => {
			this.artistList = res;
			this.artists.next(this.artistList);
		}, err => console.log(err));
  	}

    addBuyer(buyer: Buyer) {
      return this.http.post<ApiResponse>('http://localhost:8080/api/buyers', buyer);
    }

  	getBuyers() {
  		this.http.get<Buyer[]>('https://afmws.herokuapp.com/api/buyers').subscribe(res => {
  			this.buyerList = res;
  			this.buyers.next(this.buyerList);
  		}, err => console.log(err));
  	}

  	getVolunteers() {
  		this.http.get<Volunteer[]>('https://afmws.herokuapp.com/api/volunteers').subscribe(res => {
  			this.volunteerList = res;
  			this.volunteers.next(this.volunteerList);
  		}, err => console.log(err));
  	}

  	getOrders() {
  		this.http.get<Order[]>('https://afmws.herokuapp.com/api/orders').subscribe(res => {
  			this.orderList = res;
  			this.orders.next(this.orderList);
  		}, err => console.log(err));
  	}

}
