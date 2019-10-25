import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { AngularComponentsModule } from '@monorepo-nx/angular-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatDividerModule, MatCardModule, AngularComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
