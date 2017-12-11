import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {

	baseUrl: string = "https://afmws.herokuapp.com/api/search";
	queryUrl: string = "/artists/";

	constructor(private http: HttpClient) { }

	search(terms: Observable<string>) {
		return terms.debounceTime(400)
		.distinctUntilChanged()
		.switchMap(term => this.searchEntries(term));
	}

	searchEntries(term){
		return this.http
		.get(this.baseUrl + this.queryUrl + term)
		.map(res => res);
  	}

}
