//This is the form where you write a new post to submit as a new chirp

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-chirpform',
  templateUrl: './chirpform.component.html',
  styleUrls: ['./chirpform.component.css']
})
export class ChirpformComponent implements OnInit {
  form: FormGroup;
  public myText: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
    username:'',
    message: '',
    });
  }

  ngOnInit() {
    
  }

  postChirp() {

  }
}

// NEED TO CONNECT CHIRPFORM TO MOCK CHIRPS DISPLAYED IN LIST UPON SUBMITION OF A NEW CHIRP
//INJECT ROUTER
