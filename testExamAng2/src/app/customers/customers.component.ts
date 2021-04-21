/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */



import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers$: BehaviorSubject<Customers[]> = this.customersService.list$;
  phrase: string = '';
 /*  filterKey: string = 'name';
  sortKey: string = ''; */
  cols: string[] = Object.keys(new Customers())

  constructor(
    private customersService: CustomersService,
    ) { this.customersService.getAll() }

  ngOnInit(): void {
  }

  /* onChangeSort(data: string): void {
    this.sortKey = data;
  } */

  onDelete(customer: Customers): void {
    this.customersService.delete(customer);
  }

}
