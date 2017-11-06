import { Component } from '@angular/core';

import { DataService } from './data.service';
import { ChirpformComponent } from './chirpform/chirpform.component'; //Do I even need this to print the form? 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirper';

  constructor(private dataService:DataService, private chirpForm:ChirpformComponent) {

  }


}
