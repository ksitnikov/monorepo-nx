import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { AngularComponentsModule } from '@monorepo-nx/angular-components';

@NgModule({
  declarations: [ListViewComponent],
  imports: [CommonModule, AngularComponentsModule],
  exports: [ListViewComponent]
})
export class AngularCoreModule {}
