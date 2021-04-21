/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-customers',
  templateUrl: './editor-customers.component.html',
  styleUrls: ['./editor-customers.component.scss']
})
export class EditorCustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-editor-customers',
  templateUrl: './editor-customers.component.html',
  styleUrls: ['./editor-customers.component.scss']
})
export class EditorCustomersComponent implements OnInit {

  customers$: Observable<Customers> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (Number(params.id) === 0) {
        return of(new Customers());
      }

      return this.customersService.get(Number(params.id));
    })
  );

  submitted: boolean = false;
  constructor(
    private customersService: CustomersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
   
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, customers: Customers): void {
    if (customers.id !== 0) {
      this.submitted = true;
      this.customersService.update(customers).subscribe(
        ev => this.router.navigate(['customers'])
      );
      /* this.toaster.info('You have updated this user!', 'Updated', { timeOut: 4500 }); */
    } else {
      this.submitted = true;
      this.customersService.create(customers).subscribe(
        ev => this.router.navigate(['customers'])
      );
      /* this.toaster.success('You have created a new user!', 'Created', { timeOut: 4500 }); */
    }
  }


}
