import { Component } from '@angular/core';

import { Applicant } from './shared/models/applicant'

@Component({
	selector: 'applicant-register',
	templateUrl: './app/applicant-register.component.html',
	styleUrls: [ './app/applicant-register.component.css' ] 
})
export class ApplicantRegisterComponent {
	submitted = false;
	success = false;
	applicant = new Applicant();

	onSubmit() {
		this.submitted = true;
		//TEMP
		this.success = true;
	}
}