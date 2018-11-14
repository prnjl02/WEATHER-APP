import { Component, OnInit } from '@angular/core';
import { WeatherDetailService } from '../weather-detail.service';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AbstractWebDriver } from '../../../node_modules/protractor/built/browser';
import { subscribeOn } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  public weathers = [];
  fulldata = [];
  query: string;
  humidity: number;
  weatherIconUrl: string;
  observation_time: any;
  date: Date;
  sunrise: any;
  sunset: any;
  // showspinner: boolean=true;
  // date1:any;
  // sunrise1:any;
  // sunset1:any;
  // date2:any;
  // sunrise2:any;
  // sunset2:any;
  // date3:any;
  // sunrise3:any;
  // sunset3:any;


  constructor(private _weatherdetailservice: WeatherDetailService) {
  
  }

  input(city_name: string) {
    console.log(city_name);
    this._weatherdetailservice.getWeatherDetails(city_name)
      // function pranjal(){
      //  document.write('hi');
      
      // }
      .subscribe(
        data => {
          this.weathers = data.current_condition;
          this.fulldata = data.weather;
          console.log('this is fullweatherdata ', data.weather);
          this.query = data.request[0].query;
          this.observation_time = data.current_condition;
          this.date = data.weather[0].date;
          this.sunrise = data.weather[0].astronomy[0].sunrise;
          this.sunset = data.weather[0].astronomy[0].sunset;
          // this.date1=data.weather[1].date;
          // this.sunrise1=data.weather[1].astronomy[0].sunrise;
          // this.sunset1=data.weather[1].astronomy[0].sunset;
          // this.date2=data.weather[2].date;
          // this.sunrise2=data.weather[2].astronomy[0].sunrise;
          // this.sunset2=data.weather[2].astronomy[0].sunset;
          // this.date3=data.weather[3].date;
          // this.sunrise3=data.weather[3].astronomy[0].sunrise;
          // this.sunset3=data.weather[3].astronomy[0].sunset;
          // console.log("this.date = "+this.date);
          // this.humidity=data.current_condition[0].weatherIconUrl[0].value;
          //  this.weatherIconUrl=data.current_condition[0].weatherIconUrl.value;
          //  console.log('this is image url',this.weather[0].weatherIconUrl[0].value);
          // console.log("full data",this.weathers);
          // console.log("NEXT :",this.date1);
        });
      //  console.log('value of showspinner', this.showspinner);
      }

  ngOnInit() {
    // this._weatherdetailservice.getWeatherDetails('Nagpur')
    //   .subscribe(data => {
    //     console.log(data);
    //   this.weather = data.current_condition;
    //     this.query = data.request[0].query;
    //     console.log("this.query = "+this.query);

    //   });

  }

}
