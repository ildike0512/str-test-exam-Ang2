import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customers } from './customers';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  endpoint: string = 'https://nettuts.hu/jms/ildike0512/customers';
  list$: BehaviorSubject<Customers[]> = new BehaviorSubject<Customers[]>([]);

  constructor(
    private http: HttpClient,
    ) { this.getAll() }

   getAll(): void {
    this.http.get<Customers[]>(this.endpoint).subscribe((customers) => this.list$.next(customers));
  }

   get(id: number): Observable<Customers> {
    return this.http.get<Customers>(`${this.endpoint}/${id}`);
  }
  delete(customer: Customers): void {
    /* if (!confirm('Is this really what you want?')) {
      return
    } else {
      this.http.delete(`${this.endpoint}/${Customer.id}`).subscribe(
        () => this.getAll()
      ) */
     // this.toastr.warning('You have deleted this user', 'Deleted', { timeOut: 5000 });
   // }
     this.http.delete(`${this.endpoint}/${customer.id}`).subscribe(
    () => this.getAll());
  }


   create(customer: Customers): Observable<Customers> {
    return this.http.post<Customers>(this.endpoint, customer);
  }


   update(Customer: Customers): Observable<Customers> {
    return this.http.patch<Customers>(`${this.endpoint}/${Customer.id}`, Customer);
  }
}

  

