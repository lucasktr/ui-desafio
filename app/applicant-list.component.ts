import { Component, OnInit } from '@angular/core';

import { BackendService } from './shared/services/backend.service';

import { Applicant } from './shared/models/applicant';

@Component({
	selector: 'applicant-list',
	templateUrl: './app/applicant-list.component.html',
	styleUrls: [ './app/applicant-page-common.css' ]
})
export class ApplicantListComponent implements OnInit {
	applicants: Applicant[];

	constructor (private backendService: BackendService) {}

	ngOnInit() {
		this.backendService.getApplicants()
						   .subscribe(applicants => this.applicants = applicants);
	}

}
