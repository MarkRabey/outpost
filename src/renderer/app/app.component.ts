import { Component } from '@angular/core';

import { LocationService } from './services/location.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Outpost';
  today = new Date();
  forecastDates: any = [];
  currentLocation: any;
  forecast: any;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService) {
    this.forecastDates = Array(4).fill(1).map((x, i) => this.daysFromToday(i + 1));

    this.weatherService.forecast.subscribe(forecast => {
      this.forecast = forecast;
    });

    this.locationService.currentLocation.subscribe(pos => {
      this.currentLocation = pos;
      this.weatherService.getForecast(this.currentLocation);
    });
  }

  private daysFromToday(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }
}
