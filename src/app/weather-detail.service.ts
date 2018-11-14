import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from './IWeather';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherDetailService {
  public _url: string = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=b10df4916cb04c438ce114108180808&q=";

  constructor(private _http: HttpClient) { }

  getWeatherDetails(city_name): Observable<any> {
    let _url = this._url + city_name + "&format=json" + "&num_of_days=5";
    console.log("this._url = " + _url);
    return this._http.get<IWeather>(_url)
      .pipe(
        map((res: Response) => res.data
        ));

  }

}
