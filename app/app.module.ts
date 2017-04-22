import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { ApplicantFormComponent } from './shared/forms/applicant-form.component'
import { ApplicantListComponent } from './applicant-list.component';
import { ApplicantRegisterComponent } from './applicant-register.component';

import { BackendService } from './shared/services/backend.service';

@NgModule({
	declarations: [ AppComponent,
					ApplicantFormComponent,
				    ApplicantListComponent,
				    ApplicantRegisterComponent
				  ],
	imports: [ 	AppRoutingModule,
				BrowserModule,
			   	FormsModule,
			   	HttpModule,
			 ],
	providers: [ BackendService	],
	bootstrap: [ AppComponent ]
}) 
export class AppModule {}