import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HomeService} from './home.service';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import {HomeRoutingModule} from './home.routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
    CommonModule

  ],
  exports:[HomeComponent],
  providers: [HomeService],
  
})
export class HomeModule { }
