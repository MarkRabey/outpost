import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';

/* Services */
import { LocationService } from './services/location.service';
import { WeatherService } from './services/weather.service';

/* Componets */
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
    HttpClientModule,
    MomentModule,
  ],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
