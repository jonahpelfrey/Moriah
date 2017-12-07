import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Artist, Volunteer, Buyer, Order, Purchase } from '../models/models';
import { DataService } from '../services/data.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

	private artistList: Observable<Artist[]> ;
	private buyerList: Observable<Buyer[]>  ;
	private volunteerList: Observable<Volunteer[]> ;
	private orderId: number;
  	public date: Date;
  	public time: Date;
  	private artist: Artist;
  	private buyer: Buyer;
  	private volunteer: Volunteer;
  	private order: Order;
  	private purchase: Purchase;

  	results: Object;
  	searchTerm$ = new Subject<string>();



  constructor(private data:DataService) { }

  ngOnInit() {
  	this.artistList = this.data.artistsObs;
  	this.buyerList = this.data.buyersObs;
  	this.volunteerList = this.data.volunteersObs;
  }


}
