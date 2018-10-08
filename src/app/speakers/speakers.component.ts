import { Component, OnInit } from '@angular/core';
import { Speaker } from '../speaker';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  speaker: Speaker = {
    name: 'Albert Brand',
    twitter: 'al_bert_brand',
    imgUrl: 'https://cmda-tt.github.io/course-18-19/albert.jpg',
  }

  constructor() { }

  ngOnInit() {
  }

}
