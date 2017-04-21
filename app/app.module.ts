import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { ApplicantListComponent } from './applicant-list.component';
import { ApplicantRegisterComponent } from './applicant-register.component';

import { BackendService } from './shared/services/backend.service';

@NgModule({
	declarations: [ AppComponent,
				    ApplicantListComponent,
				    ApplicantRegisterComponent
				  ],
	imports: [ BrowserModule,
			   FormsModule,
			   HttpModule,
			   AppRoutingModule
			 ],
	providers: [ BackendService	],
	bootstrap: [ AppComponent ]
}) 
export class AppModule {}