import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SpeakersComponent } from './speakers.component';

describe('SpeakersComponent', () => {
  let component: SpeakersComponent;
  let fixture: ComponentFixture<SpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakersComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
