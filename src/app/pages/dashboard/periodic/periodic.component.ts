import { Component, OnInit } from '@angular/core';
import { Reading, PERIODIC_READINGS_LIST, 
  randomScalingFactor, randomDate, getRandomInt } from '../../../providers/mock-data';
import * as Chart from 'chart.js';
declare var $ : any;
//import * as $ from 'jquery';
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
  mockData: Reading[] = [];
  originalData: Reading[] = [];

  lineconfig = {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
          label: "",
          backgroundColor: 'red',
          borderColor: 'red',
          data: [],
          fill: false,
      }]
    },
    options: {
      title:{
          display: true,
          text:'Reading'
      },
      tooltips: {
          mode: 'index',
          intersect: false,
      },
      hover: {
          mode: 'nearest',
          intersect: true
      },
      scales: {
          xAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Time'
              }
          }],
          yAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Value'
              }
          }]
      }
    }
  };

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
    self.mockData = self.originalData.slice();
    // console.log('reading chosen: ', self.chosenReading);
    // console.log("start Date: ", self.startDate);
    // console.log("end Date: ", self.endDate);

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

  view() {
    var self = this;

    if(isNaN(self.chosenReading)) {
      alert('Pick a type to filter!');
    } else {
      self.filter();
      const line = <HTMLCanvasElement> document.getElementById("periodic-line-chart");
      let linectx = line.getContext("2d");
      self.mockData.forEach(function(reading: Reading, i) {
        if(i == 0) {
          self.lineconfig.options.title.text = reading.typeName;
        }
        self.lineconfig.data.labels.push(reading.timestamp.toLocaleString());
        self.lineconfig.data.datasets[0].data.push(reading.value);
      });
      
      let lineChart = new Chart(linectx, self.lineconfig);
      $('.periodic-modal').modal();
      $('.periodic-modal').on('hidden.bs.modal', function (e) {
        // console.log('modal is hidden');
        lineChart.destroy();
      })
    }
  }

  clear() {
    this.mockData = this.originalData.slice();
    this.startDate = null;
    this.endDate = null;
    this.chosenReading = 'Choose...';
  }

}
