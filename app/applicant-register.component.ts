import { Component } from '@angular/core';

import { Applicant } from './shared/models/applicant';

import { BackendService } from './shared/services/backend.service';
import { ErrorResponse } from './shared/services/backend.service';

@Component({
	selector: 'applicant-register',
	templateUrl: './app/applicant-register.component.html',
	styleUrls: [ './app/applicant-register.component.css' ] 
})
export class ApplicantRegisterComponent {
	submitted = false;
	success = false;
	applicant = new Applicant();
	form_errors: any = {};

	constructor (private backendService: BackendService) {}

	private handleError(appComponent: ApplicantRegisterComponent,errorResponse: ErrorResponse) {
		let error_text:string = '';

		if (errorResponse.has_context) {
			appComponent.form_errors = errorResponse.context;
		}

		appComponent.submitted = false;
	}

	checkResponse(appComponent: ApplicantRegisterComponent, res: any) {
		if (res.id)
			appComponent.success = true;
		else
			appComponent.submitted = false;
	}

	onSubmit() {
		this.backendService.registerApplicant(this.applicant)
							.subscribe(response => this.checkResponse(this, response),
									   error => this.handleError(this, error));
		this.submitted = true;
	}
}