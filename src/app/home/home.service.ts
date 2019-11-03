import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import {Customer} from './customer.model';
@Injectable({  
  providedIn: 'root'  
})  
export class HomeService {  
  Url :string;  
  token : string;  
  header : any;  
  constructor(private http : HttpClient) {   
  
    this.Url = 'http://localhost:8888/api';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
    
   getCustomers()  
   {  
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*' }) };  
    return this.http.get(this.Url + '/customer');  
   }  
}  
