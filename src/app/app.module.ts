import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakersComponent,
    SpeakerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
