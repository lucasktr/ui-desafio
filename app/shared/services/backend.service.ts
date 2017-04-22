import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Applicant } from '../models/applicant';

export class ErrorResponse {
	has_context: boolean;
	context: any;
}

@Injectable()

export class BackendService {
	applicantUrl = 'https://delineaapi.herokuapp.com/candidate/';

	private userId = '';
	private headers = new Headers({'Content-Type': 'application/json'});

	private handleError(error: Response | any) {
		let errorResponse: ErrorResponse = {
			has_context: false,
			context: null
		};

		if (error instanceof Response) {
			//BAD REQUEST
			if (error.status == 400) {
				errorResponse.has_context = true;
				errorResponse.context = error.json() || {};
			}

			const err  = JSON.stringify(error.json() || '');
			console.log(`${error.status} - ${error.statusText || ''} - ${err}`);
		} else {
			const err = error.message? error.message : error.toString();
			console.log(err);
		}
		return Observable.throw(errorResponse);
	}

	// //Receive array of sandwiches/drinks 
	// //Create an Order instance from it
	// private handleOrder(res: any) {
	// 	let element: any;
	// 	let obj: Array<any>;
	// 	let order: Order = {
	// 		sandwiches: [],
	// 		drinks: []
	// 	};

	// 	obj = res.json().data;

	// 	for (let element of obj) {
	// 		let item: OrderItem = new OrderItem;
	// 		item.name = element.name;
	// 		item.price = element.price;

	// 		if (element.type == 'sandwich')
	// 			order.sandwiches.push(item);

	// 		if (element.type == 'drink')
	// 			order.drinks.push(item);
	// 	}

	// 	return order;
	// }

	constructor (private http: Http) {}

	//get data
	getApplicants(): Observable<Applicant[]> {
		return this.http.get(this.applicantUrl,{headers: this.headers})
						.map(res => res.json() || [])
						.catch(this.handleError);
	}

	// getSandwiches(): Observable<Sandwich[]> {
	// 	return this.http.get(this.sandwichesUrl)
	// 			.map(this.extractData)
	// 			.catch(this.handleError);
	// }

	//put data
	registerApplicant(applicant: Applicant): Observable<any> {
		return this.http.post(this.applicantUrl, applicant, {headers: this.headers})
						.map(res => res.json() || {})
						.catch(this.handleError);
	}

	// orderSandwich(item: Sandwich): Observable<boolean> {
	// 	let targetUrl = this.ordersUrl;

	// 	let order = {
	// 		type: 'sandwich',
	// 		name: item.name,
	// 		price: item.price,
	// 		ingredients: item.ingredients
	// 	};

	// 	return this.http.post(targetUrl, order, {headers: this.headers})
	// 			   .map(res => res.statusText == "Created")
	// 			   .catch(this.handleError);
	// }

}