import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reading, REALTIME_READINGS_LIST, 
  randomScalingFactor, getRandomInt } from '../../../providers/mock-data';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css']
})
export class RealTimeComponent implements OnInit {

  readingOptions: any = REALTIME_READINGS_LIST;
  startDate: Date = null;
  endDate: Date = null;
  chosenReading: any = 'Choose...';
  mockData: Reading[] = [];
  originalData: Reading[] = [];
  myInterval = null;

  constructor() { }

  ngOnInit() {
    let self = this;
    self.myInterval = setInterval(function() {
      let type;
      if(!isNaN(self.chosenReading)) {
        type = self.readingOptions[self.chosenReading - 1];
      } else {
        type = self.readingOptions[getRandomInt(0, 8)];
      }
      self.mockData.unshift(new Reading(0, new Date(), type.id, type.name, randomScalingFactor(), type.unit));
    }, 1000);

    self.originalData = self.mockData.slice();
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
    this.mockData = [];
    this.startDate = null;
    this.endDate = null;
    this.chosenReading = 'Choose...';
  }

  OnDestroy() {
    clearInterval(this.myInterval);
  }

}
