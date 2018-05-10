import { Component } from '@angular/core';

import { LocationService } from './services/location.service';

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

  constructor(private locationService: LocationService) {
    this.forecastDates = Array(4).fill(1).map((x, i) => this.daysFromToday(i + 1));
    this.locationService.currentLocation.subscribe((pos) => {
      console.log(pos);
    });
    // this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.currentLocation = this.locationService.getLocation();
    console.log(this.currentLocation);
  }


  private daysFromToday(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }
}
