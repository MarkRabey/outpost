import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  currentLocation: any;

  private currentLocationSubject = new Subject();

  constructor(private http: HttpClient) {
    this.currentLocation = this.currentLocationSubject.asObservable();
    this.getLocation();
  }

  async getLocation() {
    let location = await this.getLocationFromNavigator();

    if (!location) {
      location = await this.getLocationFromIp();
    }
    this.currentLocationSubject.next(location);
  }

  getLocationFromNavigator() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        }),
        ({  code, message }) => reject(Object.assign(new Error(message), {  name: 'PositionError', code })),
        options
      );
    });
  }

  async getLocationFromIp() {
    const data: any = await this.http.get('https://ipinfo.io/json').toPromise();
    return {
      latitude: +data.loc.split(',')[0],
      longitude: +data.loc.split(',')[1],
    };
  }
}
