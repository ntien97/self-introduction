import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgMonochromeModule } from 'ng-monochrome';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, NgMonochromeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
