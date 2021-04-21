import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Customers } from './customers'
import { CustomersComponent } from './customers/customers.component';
import { EditorCustomersComponent } from './editor-customers/editor-customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  },
  {
    path: 'customers/:id',
    component: EditorCustomersComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
