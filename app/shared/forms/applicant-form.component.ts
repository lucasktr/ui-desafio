import { Component, Input } from '@angular/core';

import { Applicant } from '../../shared/models/applicant';

import { BackendService } from '../../shared/services/backend.service';
import { ErrorResponse } from '../../shared/services/backend.service';

@Component({
	selector: 'applicant-form',
	templateUrl: './app/shared/forms/applicant-form.component.html',
	styleUrls: [ './app/shared/forms/applicant-form.component.css' ] 
})
export class ApplicantFormComponent {
	@Input() applicant: Applicant;

	form_errors: any = {};
	submitted = false;
	success = false;

	constructor (private backendService: BackendService) {}

	private handleError(appComponent: ApplicantFormComponent,errorResponse: ErrorResponse) {
		let error_text:string = '';

		if (errorResponse.has_context) {
			appComponent.form_errors = errorResponse.context;
		}

		appComponent.submitted = false;
	}

	checkResponse(appComponent: ApplicantFormComponent, res: any) {
		//TODO: Emit an event to parent indicanting success
		if (res.id)
			appComponent.success = true;
		else
			appComponent.submitted = false;
	}

	onSubmit() {
		if(this.applicant.hasOwnProperty('id')) {
			//HTTP PUT
			console.log('BACKEND SERVICE PUT FUNCTION NOT IMPLEMENTED')
		}
		else {
			this.backendService.registerApplicant(this.applicant)
					.subscribe(response => this.checkResponse(this, response),
							   error => this.handleError(this, error));
		}
		this.submitted = true;
	}
}