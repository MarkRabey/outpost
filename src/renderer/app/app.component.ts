import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Outpost';
  today = new Date();
  forecastDates: any = [];
  currentLocation: string;

  constructor() {
    this.forecastDates = Array(4).fill(1).map((x, i) => this.daysFromToday(i + 1));
    this.currentLocation = 'Midland, ON';
  }

  private daysFromToday(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }
}
