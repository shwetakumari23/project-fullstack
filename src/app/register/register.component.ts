import { Component, OnInit } from '@angular/core';    
import { RegisterService } from './register.service';       
import {Observable} from 'rxjs';    
import {Register} from './register.model';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router } from '@angular/router';    

    
@Component({    
  selector: 'app-register',    
  templateUrl: './register.component.html',    
  styleUrls: ['./register.component.css']    
})    
export class RegisterComponent implements OnInit {    
  data = false;    
  UserForm: any;    
  massage:string;    
  constructor(private formbulider: FormBuilder,private registerService:RegisterService, private router: Router) { }    
    
  ngOnInit() {    
     this.UserForm = this.formbulider.group({    
      UserName: [null, [Validators.required]],    
      LoginName: [null, [Validators.required]],    
      Password: [null, [Validators.required]],    
      Email: [null, [Validators.required, Validators.email]],    
      ContactNo: [null, [Validators.required]],    
      Address: [null, [Validators.required]],    
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.registerService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
      this.router.navigate(['/home']);
    });    
  }    
}    