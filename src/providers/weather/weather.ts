import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '99dfe35fcb7de1ee';
  url;

  constructor(public http: Http) {
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(lon, lat){
  console.info("lon "+lon)
  console.info("lat "+lat)
    return this.http.get(this.url+'/'+ lat +','+lon+'.json')
    
      .map(res => res.json());
  }

}
