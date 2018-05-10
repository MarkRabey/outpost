import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { TodayComponent } from './components/today/today.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
