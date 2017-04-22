import { Component } from '@angular/core';

import { Applicant } from './shared/models/applicant';

@Component({
	selector: 'applicant-register',
	templateUrl: './app/applicant-register.component.html',
	styleUrls: [ './app/applicant-register.component.css' ] 
})
export class ApplicantRegisterComponent {
	applicant = new Applicant();
	success = false;

	onSubmitSuccess(event) {
		this.success = true;
	}

}