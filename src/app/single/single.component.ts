//This is where an indivual user's post pops up when you click on it to view

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
