import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

}
