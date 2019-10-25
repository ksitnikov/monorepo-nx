import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomersComponent,
        children: [
          {
            path: '',
            component: CustomersListComponent
          }
        ]
      },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomersRouting {}
