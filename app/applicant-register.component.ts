import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Applicant } from './shared/models/applicant';

@Component({
	selector: 'applicant-register',
	templateUrl: './app/applicant-register.component.html',
	styleUrls: [ './app/applicant-page-common.css' ] 
})
export class ApplicantRegisterComponent {
	applicant = new Applicant();

	constructor (private router: Router) {}

	onSubmitSuccess(event) {
		this.router.navigateByUrl('/listagem');
	}

}