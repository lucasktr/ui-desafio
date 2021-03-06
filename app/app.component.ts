import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { UserAuthenticationService } from './shared/services/user-authentication.service';

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	styleUrls: [ './app/applicant-page-common.css' ]
})
export class AppComponent {
	constructor (private userAuthService: UserAuthenticationService,
				 private router: Router) {}

	logout() {
		this.userAuthService.logout();
		this.router.navigateByUrl('/');
	}
}