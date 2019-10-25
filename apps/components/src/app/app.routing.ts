import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { ListViewComponent } from '../../../../libs/angular-core/src/lib/list-view/list-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'list',
        component: ListViewComponent
      },
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'lazy',
        loadChildren: () => import('')
      },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}
