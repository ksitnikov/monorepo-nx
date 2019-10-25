import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';
import { CustomersRouting } from './customers.routing';



@NgModule({
  declarations: [CustomersListComponent, CustomersComponent],
  imports: [
    CommonModule,
    CustomersRouting
  ]
})
export class CustomersModule { }
