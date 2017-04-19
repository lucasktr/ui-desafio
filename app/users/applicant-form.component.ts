import { Component } from '@angular/core';
import { Applicant } from '../shared/models/applicant';

@Component({
	selector: 'applicant-form',
	templateUrl: './app/users/applicant-form.component.html',
	styleUrls: ['./app/users/applicant-form.component.css']
}) 
export class ApplicantFormComponent {
	submitted = false;
	success = false;
	applicant = new Applicant();

	onSubmit() {
		this.submitted = true;
		//TEMP
		this.success = true;
	}
}