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

	constructor (private http: Http) {}

	//get data
	getApplicant(id: string): Observable<Applicant> {
		let url: string = this.applicantUrl + id;
		return this.http.get(url,{headers: this.headers})
						.map(res => res.json() || {})
						.catch(this.handleError);
	}

	getApplicants(): Observable<Applicant[]> {
		return this.http.get(this.applicantUrl,{headers: this.headers})
						.map(res => res.json() || [])
						.catch(this.handleError);
	}

	//post data
	registerApplicant(applicant: Applicant): Observable<Applicant> {
		return this.http.post(this.applicantUrl, applicant, {headers: this.headers})
						.map(res => res.json() || {})
						.catch(this.handleError);
	}

	//put data
	updateApplicant(id: string, applicant: Applicant): Observable<Applicant> {
		let url: string = this.applicantUrl + id;
		return this.http.put(url, applicant, {headers: this.headers})
						.map(res => res.json() || {})
						.catch(this.handleError);
	}
}