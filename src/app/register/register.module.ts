import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RegisterService} from './register.service';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import {RegisterRoutingModule} from './register.routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RegisterRoutingModule

  ],
  exports:[RegisterComponent],
  providers: [RegisterService],
  
})
export class RegisterModule { }
