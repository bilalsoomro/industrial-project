import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reading, REALTIME_READINGS_LIST, 
  randomScalingFactor, getRandomInt } from '../../../providers/mock-data';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css']
})
export class RealTimeComponent implements OnInit {

  readingOptions: any []  = REALTIME_READINGS_LIST;
  startDate: Date = null;
  endDate: Date = null;
  chosenReading: any = this.readingOptions[0].id;
  mockData: Reading[] = [];
  originalData: Reading[] = [];
  myInterval = null;

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
          text: this.readingOptions[0].name
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
    let self = this;
    let lineChart;

    const line = <HTMLCanvasElement> document.getElementById("realtime-line-chart");
    let linectx = line.getContext("2d");
    lineChart = new Chart(linectx, self.lineconfig);

    let currentSelectedReading = self.chosenReading;

    self.myInterval = setInterval(function() {
      if(self.chosenReading != currentSelectedReading) {
        self.clearData(lineChart);
        currentSelectedReading = self.chosenReading
        self.lineconfig.options.title.text = self.readingOptions[self.chosenReading - 1].name
      }
      let type = self.readingOptions[self.chosenReading - 1];
      let val = randomScalingFactor();
      var d = new Date();
      self.mockData.unshift(new Reading(0, d, type.id, type.name, val, type.unit));
      self.addData(lineChart, d.toLocaleTimeString(), val);
    }, 1000);
  }

  OnDestroy() {
    clearInterval(this.myInterval);
  }

  clearData(chart) {
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
      dataset.data = [];
    })
    chart.update();
  }

  addData(chart, label, data) {
    if(chart.data.labels.length > 20) {
      chart.data.labels.shift();
    }
    chart.data.labels.push(label);

    chart.data.datasets.forEach((dataset) => {
        if(dataset.data.length > 20) {
          dataset.data.shift();
        }
        dataset.data.push(data);
    });
    chart.update();
}

}
