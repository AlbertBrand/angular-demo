import { Component, OnInit } from '@angular/core';
import { Speaker } from '../speaker';
import { SPEAKERS } from '../speakers';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  speakers = SPEAKERS;
  speaker: Speaker = {
    name: '',
    twitter: '',
    imgUrl: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(event: Event, speaker: Speaker) {
    event.preventDefault();
    this.speaker = speaker;
  }

}
