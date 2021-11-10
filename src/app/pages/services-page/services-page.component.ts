import { Component, OnInit } from '@angular/core';
import { MatAccordionDisplayMode } from '@angular/material/expansion';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
<<<<<<< HEAD
  mode: MatAccordionDisplayMode = 'default';

  constructor() {}

  ngOnInit(): void {}
=======
  elementList: string[] = [
    'stepperElement1',
    'stepperElement2',
    'stepperElement3',
  ];
  countClick = 0;
  outputElementUp = this.elementList[this.countClick];
  outputElementDown = this.elementList[this.countClick + 1];
  constructor() {}
  ngOnInit(): void {}
  pressArrowUp() {
    if (++this.countClick > this.elementList.length - 1) {
      this.countClick = 0;
    }
    this.setOutputElement();
  }
  pressArrowDown() {
    if (--this.countClick < 0) {
      this.countClick = this.elementList.length - 1;
    }
    this.setOutputElement();
  }
  private setOutputElement() {
    this.outputElementUp = this.elementList[this.countClick];
    this.outputElementDown =
      this.elementList[
        this.countClick > this.elementList.length - 2 ? 0 : this.countClick + 1
      ];
  }
>>>>>>> feature/servicesLowerPart
}
