import { Component, OnInit } from "@angular/core";
import { WeatherDetailService } from "../weather-detail.service";
import { Event, Router, NavigationStart, NavigationEnd } from "@angular/router";
import { AbstractWebDriver } from "../../../node_modules/protractor/built/browser";
import { subscribeOn } from "../../../node_modules/rxjs/operators";

@Component({
  selector: "app-weather-detail",
  templateUrl: "./weather-detail.component.html",
  styleUrls: ["./weather-detail.component.css"],
})
export class WeatherDetailComponent implements OnInit {
  public weathers = [];
  fulldata = [];
  query: string;

  exceptionMessage: string = "";
  showExceptionMessage: boolean = false;
  showSpinner: boolean = false;

  constructor(private _weatherdetailservice: WeatherDetailService) {}

  ngOnInit() {}
  input(city_name: string) {
    this.showSpinner = true;
    console.log(city_name);
    this._weatherdetailservice.getWeatherDetails(city_name).subscribe(
      (data) => {
        if (data.request) {
          this.showExceptionMessage = false;
          this.weathers = data.current_condition;
          this.fulldata = data.weather;
          this.query = data.request[0].query;
          console.log("data ", data);
          this.showSpinner = false;
        } else {
          this.showExceptionMessage = true;
          this.exceptionMessage = "Incorrect Location entered";
          this.showSpinner = false;
        }
      },
      (error) => console.log("error")
    );
  }
}
