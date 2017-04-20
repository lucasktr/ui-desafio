import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';;
import { ApplicantFormComponent } from './users/applicant-form.component';
import { ApplicantListComponent } from './applicant-list.component';
import { ApplicantRegisterComponent } from './applicant-register.component';

import { BackendService } from './shared/services/backend.service'

@NgModule({
	imports: [ BrowserModule,
			   FormsModule,
			   HttpModule
			 ],
	declarations: [ AppComponent,
				    ApplicantFormComponent,
				    ApplicantListComponent,
				    ApplicantRegisterComponent
				  ],
	providers: [ BackendService	],
	bootstrap: [ AppComponent ]
}) 
export class AppModule {}