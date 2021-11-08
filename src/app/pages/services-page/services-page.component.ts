import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  elementList: string[] = [
    'stepperElement1',
    'stepperElement2',
    'stepperElement3',
  ];
  countClick = 0;
  outputElementUp = this.elementList[this.countClick];
  outputElementDown = this.elementList[this.countClick + 1];
  constructor() {}
  pressArrowUp() {
    if (++this.countClick > this.elementList.length - 1) {
      this.countClick = 0;
    }
    this.outputElementUp = this.elementList[this.countClick];
    this.outputElementDown =
      this.elementList[
        this.countClick > this.elementList.length - 2 ? 0 : this.countClick + 1
      ];
  }
  pressArrowDown() {}
  ngOnInit(): void {}
}
