import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import {Register} from './register.model';
@Injectable({  
  providedIn: 'root'  
})  
export class RegisterService {  
  Url :string;  
  token : string;  
  header : any;  
  constructor(private http : HttpClient) {   
  
    this.Url = 'http://localhost:8888/api';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
    
   CreateUser(register:Register)  
   {  
     let cust = {
       name: register.UserName,
       userName: register.UserName,
       email: register.Email,
       contactNumber: register.ContactNo,
       address: register.Address,
       password: register.Password,
       customerId: 0
     };
     let data = JSON.stringify(cust);
     console.log(data);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*' }) };  
    return this.http.post(this.Url + '/customer', data, httpOptions)  
   }  
}  
