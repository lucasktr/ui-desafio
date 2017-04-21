import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ApplicantListComponent } from './applicant-list.component'
import { ApplicantRegisterComponent } from './applicant-register.component'


const routes: Routes = [
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
  { path: 'cadastro',  component: ApplicantRegisterComponent },
  { path: 'listagem' , component: ApplicantListComponent }
  //{ path: 'detail/:id', component: xComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}