import { Component } from '@angular/core';

export class Informations { 
  city: String 
  conditions: String 
  temperature: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Weather-App';
}
