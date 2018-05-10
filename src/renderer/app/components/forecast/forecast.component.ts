import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input() date: any;

  constructor() { }

  ngOnInit() {
    console.log(this.date);
  }

}
