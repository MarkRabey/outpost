import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_KEY = '2b6273e1a04948a0b01526993b2bdec5';
const BASE_API_URL = `http://api.openweathermap.org/data/2.5`;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentWeather: Observable<any>;
  private currentWeatherSubject = new Subject<any>();

  forecast: Observable<any>;
  private forecastSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.currentWeather = this.currentWeatherSubject.asObservable();
    this.forecast = this.forecastSubject.asObservable();
  }

  async getCurrentConditons(location) {
    const WEATHER_URL = this.getAPIUrl('weather', location);
    const weather = await this.http.get(WEATHER_URL).toPromise();
    this.currentWeatherSubject.next(weather);
  }

  async getForecast(location) {
    const FORECAST_URL = this.getAPIUrl('forecast', location);
    const forecast = await this.http.get(FORECAST_URL).toPromise();
    this.forecastSubject.next(forecast);
  }

  private getAPIUrl(endpoint: string, { latitude, longitude }) {
    return `${ BASE_API_URL }/${ endpoint }?units=metric&lat=${ latitude }&lon=${ longitude }&appid=${ API_KEY }`;
  }
}
