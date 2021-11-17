import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data-service.service'
import { Informations } from '../app.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() onSelection: EventEmitter<Informations> = new EventEmitter<Informations>()  
  information: Informations = new Informations()
  city: String = ""
  constructor(private serviceData: DataService) { }
  submit() {
    this.serviceData.load(this.city).subscribe(data => {
      this.information.city = data['name']
      this.information.conditions = data['weather'][0]['main']
      this.information.temperature = Math.round((data['main']['temp'] - 273.15))
      this.onSelection.emit(this.information)
    })
  }

}
