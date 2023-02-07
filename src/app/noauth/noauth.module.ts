import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoauthRoutingModule } from './noauth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NoauthComponent } from './noauth.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    NoauthComponent
  ],
  imports: [
    CommonModule,
    NoauthRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class NoauthModule { }
