//This is basically the timeline - list of other user's posts that will be displayed below a dropdown (expansion panel) chirpform to submit a new chirp 
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'

import { DataService} from '../data.service' 
import { IChirps } from '../chirps'
import { ChirpformComponent } from '../chirpform/chirpform.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  chirps: Array<IChirps>;
  
  constructor(private svc: DataService) { }

  ngOnInit() {
    this.svc.getChirps().then((chirps) => {
      this.chirps = chirps
    })
  }

}

