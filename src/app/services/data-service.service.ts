import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = '270decc50e08e51f04689988b967695b' 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
  }
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
