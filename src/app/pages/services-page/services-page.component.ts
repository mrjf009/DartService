import { Component, OnInit } from '@angular/core';
import { MatAccordionDisplayMode } from '@angular/material/expansion';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  mode: MatAccordionDisplayMode = 'default';

  constructor() {}

  ngOnInit(): void {}
}
