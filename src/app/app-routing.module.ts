import {Routes , RouterModule} from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { LoginComponent } from './login/login.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes:Routes=[
    {path:'login' , component:LoginComponent },
    {path:'' ,redirectTo:"/login",pathMatch:'full' },
    {path:'weather-detail', component: WeatherDetailComponent}
  ];

  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })
  export class AppRoutingModule{}