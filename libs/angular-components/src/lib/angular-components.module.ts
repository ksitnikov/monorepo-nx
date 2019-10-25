import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { ImpExampleComponent } from './imp-example/imp-example.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [ListComponent, ImpExampleComponent],
  exports: [ListComponent, ImpExampleComponent]
})
export class AngularComponentsModule {}
