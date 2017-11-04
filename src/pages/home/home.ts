import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  longlati:{
    city:string,
    lon:string,
    lat:string
  };
  geoLocation:{
    lon:string,
    lat:string
  }

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private storage:Storage, private geolocation:Geolocation) {
    this.storage.get('longlati').then((val) => {
        if(val){
          console.info(val)
          this.longlati = JSON.parse(val);
        } else {
          this.longlati = {
            city: 'Paris',
            lon: '-81.23304',
            lat: '42.983391'
          }
        }
      });
    this.storage.get('geoLocation').then((val) => {
      this.geolocation.getCurrentPosition().then((position) => {
        var pos = position;
        this.geoLocation = {
          lon : String(pos.coords.longitude),
          lat : String(pos.coords.latitude)
        }
      });
    })
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    console.info(this.longlati)
    this.storage.get('longlati').then((val) => {
      this.weatherProvider.getWeather(this.longlati.lon, this.longlati.lat)  .subscribe(weather => {
        this.weather = weather.current_observation;
      });
    });
  }

  convertCityToLonLat(citySearch) {
    citySearch = ""+citySearch;
    var result = {
          city: '',
          lon: '',
          lat: ''
      }
   if (citySearch.toUpperCase() == "PARIS") {
      result = {
          city: citySearch,
          lon: '2.3486',
          lat: '48.853401'
      }
    }
    else if (citySearch.toUpperCase() =="SANFRANCISCO") {
      result = {
          city: citySearch,
          lon: '-122.45108',
          lat: '37.766602'
      }
    }
    else {
      result = {
          city: citySearch,
          lon: '-75.499901',
          lat: '43.000351'
      }
    }
    return result;
  }

  useGeolocation() {
    return this.geoLocation;
  }

  localisation() {
    let longlati = this.useGeolocation();
    this.storage.set('longlati', JSON.stringify(longlati));
    this.navCtrl.push(HomePage);
  }

  saveForm(citySearch){
    let longlati = this.convertCityToLonLat(citySearch);
    this.storage.set('longlati', JSON.stringify(longlati));
    this.navCtrl.push(HomePage);
  }
}
