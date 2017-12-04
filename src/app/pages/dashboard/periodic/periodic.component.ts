import { Component, OnInit } from '@angular/core';
import { Reading, PERIODIC_READINGS_LIST, randomScalingFactor, randomDate } from '../../../providers/mock-data';

@Component({
  selector: 'app-periodic',
  templateUrl: './periodic.component.html',
  styleUrls: ['./periodic.component.css']
})
export class PeriodicComponent implements OnInit {

  readingOptions: any = PERIODIC_READINGS_LIST;
  startDate: Date = null;
  endDate: Date = null;
  chosenReading: any = 'Choose...';
  // showTable: boolean = false;

  mockData: Reading[] = [];

  originalData: Reading[] = [];

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 100; i++) {
      this.mockData.push(new Reading(i, randomDate(new Date(2017, 0, 1), new Date()), randomScalingFactor(), 'volt'));
    }

    this.mockData.sort(function (a, b) {
      return a.timestamp.valueOf() - b.timestamp.valueOf();
    });

    this.originalData = this.mockData.slice();
  }

  filter() {
    console.log('reading chosen: ', this.chosenReading);
    console.log("start Date: ", this.startDate);
    console.log("end Date: ", this.endDate);

    // if(this.startDate != n)
  }

  clear() {
    this.mockData = this.originalData.slice();
    this.startDate = null;
    this.endDate = null;
    this.chosenReading = 'Choose...';
  }

}
