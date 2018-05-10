import { Component, OnInit, Input } from '@angular/core';

import { LocationService } from '../../services/location.service';
import { WeatherService } from '../../services/weather.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  location: any;
  currentWeather: any;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService) {
    this.locationService.currentLocation.subscribe(location => {
      this.location = location;
      this.weatherService.getCurrentConditons(this.location);
    });

    this.weatherService.currentWeather.subscribe(currentWeather => {
      this.currentWeather = currentWeather;
      console.log(currentWeather);
    });
  }

  ngOnInit() {
  }

  getIcon() {
    const icon = this.currentWeather.weather[0].icon;
    switch (icon) {
      case '01d':
        return 'B';
      case '01n':
        return 'C';
      case '02d':
        return 'H';
      case '02n':
        return 'I';
      case '03d':
        return 'N';
      case '03n':
        return 'N';
      case '04d':
        return 'Y';
      case '04n':
        return 'Y';
      case '09d':
        return 'Q';
      case '09n':
        return 'Q';
      case '10d':
        return 'R';
      case '10n':
        return 'R';
      case '11d':
        return 'O';
      case '11n':
        return 'O';
      case '13d':
        return 'W';
      case '13n':
        return 'W';
      case '50d':
        return 'M';
      case '50n':
        return 'M';
    }
  }

}
