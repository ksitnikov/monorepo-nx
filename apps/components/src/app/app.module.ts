import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouting } from './app.routing';
import { IntroComponent } from './intro/intro.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AngularComponentsModule } from '@monorepo-nx/angular-components';
import { AngularCoreModule } from '@monorepo-nx/angular-core';

@NgModule({
  declarations: [AppComponent, IntroComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    MatToolbarModule,
    MatButtonModule,
    AngularComponentsModule,
    AngularCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
