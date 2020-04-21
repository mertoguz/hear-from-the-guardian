import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { THE_GUARDIAN_API_KEY } from '../config/the-guardian-api-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: 'THE_GUARDIAN_API_KEY',
      useValue: THE_GUARDIAN_API_KEY
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
