import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ApplicantRegisterComponent } from './applicant-register.component'
import { ApplicantFormComponent } from './users/applicant-form.component'


@NgModule({
	imports: [ BrowserModule,
			   FormsModule
			 ],
	declarations: [ AppComponent,
					ApplicantRegisterComponent,
				    ApplicantFormComponent
				  ],
	bootstrap: [AppComponent]
}) 
export class AppModule {}