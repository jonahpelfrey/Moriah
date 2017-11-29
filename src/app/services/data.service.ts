import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Artist, Volunteer, Buyer, Order } from '../models/models';

@Injectable()
export class DataService {

	private artistList: Artist[];
	private artists: BehaviorSubject<Artist[]> = new BehaviorSubject([]);
	public readonly artistsObs: Observable<Artist[]> = this.artists.asObservable();

	constructor(private http: HttpClient) {}

	addArtist(artist: Artist) {
		this.http.post('', artist).subscribe((res: any) => {
			this.artistList.push(res.result);
			this.artists.next(this.artistList);
		}, err => console.log(err));
	}

  	getArtists() {
		this.http.get<Artist[]>('https://afmws.herokuapp.com/api/artists').subscribe(res => {
			this.artistList = res;
			this.artists.next(this.artistList);
		}, err => console.log(err));
  	}

}
