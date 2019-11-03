import { Component, OnInit } from '@angular/core';
import {Customer} from './customer.model';
import {HomeService} from './home.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customers : Customer[] = [];

  constructor(private homeService: HomeService, private activatedRoute: Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee() {
    this.homeService
    .getCustomers()
    .subscribe((data: any) => {
      console.log(data);
      for(let i=0; i<data.length; i++){
         let c = new Customer();
         c.name = data[i].name;
         c.address = data[i].address;
         c.email = data[i].email;
         c.userName = data[i].userName;
         c.contact = data[i].contactNumber;
         this.customers.push(c);

      }
    });
  }
}
