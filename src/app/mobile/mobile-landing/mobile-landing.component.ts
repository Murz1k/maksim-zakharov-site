import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-landing',
  templateUrl: './mobile-landing.component.html',
  styleUrls: ['./mobile-landing.component.scss']
})
export class MobileLandingComponent implements OnInit {

  currentYear = 2016;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
