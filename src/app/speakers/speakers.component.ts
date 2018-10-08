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
  selectedSpeaker?: Speaker;

  constructor() { }

  ngOnInit() {
  }

  onSelect(event: Event, speaker: Speaker) {
    event.preventDefault();
    this.selectedSpeaker = speaker;
  }

  createNewSpeaker() {
    const newSpeaker = {
      name: '',
      twitter: '',
      imgUrl: '',
    }
    this.speakers.push(newSpeaker);
    this.selectedSpeaker = newSpeaker;
  }

  deleteSelectedSpeaker() {
    this.speakers = this.speakers.filter(speaker => speaker !== this.selectedSpeaker)
    delete this.selectedSpeaker;
  }

}
