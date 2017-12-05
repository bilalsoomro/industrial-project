import { Component, OnInit } from '@angular/core';
import { Reading, PERIODIC_READINGS_LIST, 
  randomScalingFactor, randomDate, getRandomInt } from '../../../providers/mock-data';

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
      let type = this.readingOptions[getRandomInt(0, 5)];
      this.mockData.push(new Reading(i, randomDate(new Date(2017, 0, 1), new Date()), type.id, type.name, randomScalingFactor(), type.unit));
    }

    this.mockData.sort(function (a, b) {
      return a.timestamp.valueOf() - b.timestamp.valueOf();
    });

    this.originalData = this.mockData.slice();
  }

  filter() {
    let self = this;
    console.log('reading chosen: ', self.chosenReading);
    console.log("start Date: ", self.startDate);
    console.log("end Date: ", self.endDate);

    if(!isNaN(self.chosenReading)) {
      self.mockData = self.mockData.filter(function(a) {
        return a.typeId === self.chosenReading;
      });
    } else {
      alert('Pick a type to filter!');
    }

    if(self.startDate != null) {
      self.mockData = self.mockData.filter(function(a) {
        let date = new Date(self.startDate);
        return a.timestamp.valueOf() >= date.valueOf();
      });
    }

    if(self.endDate != null) {
      self.mockData = self.mockData.filter(function(a) {
        let date = new Date(self.endDate);
        return a.timestamp.valueOf() <= date.valueOf();
      });
    }
  }



  clear() {
    this.mockData = this.originalData.slice();
    this.startDate = null;
    this.endDate = null;
    this.chosenReading = 'Choose...';
  }

}
