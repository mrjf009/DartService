import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  videoPlayer?: HTMLVideoElement;

  @ViewChild('videoPlayer')
  set mainVideoEl(el: ElementRef) {
    this.videoPlayer = el.nativeElement;
  }

  constructor() {}

  ngOnInit(): void {}

  toggleVideo() {
    if (this.videoPlayer?.paused) {
      this.videoPlayer?.play();
    } else this.videoPlayer?.pause();
  }
}
