import { Component } from '@angular/core';
import { Informations } from '../app.component';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent {

  information: Informations = { 
    city: "No City",
    conditions: "-",
    temperature: 0,
  }
  update(information: Informations) { 
    this.information = information
  }
}
