import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reading, REALTIME_READINGS_LIST, randomScalingFactor } from '../../../providers/mock-data';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css']
})
export class RealTimeComponent implements OnInit {

  readingOptions: any[] = REALTIME_READINGS_LIST;
  chosenReading: any = this.readingOptions[0].id;
  mockData: Reading[] = [];
  myInterval = null;

  // contains the config of the line graph
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
      title: {
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

  // runs on the start of the real-time page
  ngOnInit() {
    let self = this;
    let lineChart;

    // initializes the graph
    const line = <HTMLCanvasElement>document.getElementById("realtime-line-chart");
    let linectx = line.getContext("2d");
    lineChart = new Chart(linectx, self.lineconfig);

    let currentSelectedReading = self.chosenReading;

    // set an interval to generate new dummy value every 1 second
    self.myInterval = setInterval(function () {

      // if the selected measurement is changed, the graph needs to be cleared and the label changed
      if (self.chosenReading != currentSelectedReading) {
        self.clearData(lineChart);
        currentSelectedReading = self.chosenReading
        self.lineconfig.options.title.text = self.readingOptions[self.chosenReading - 1].name
      }

      // generate dummy data and update graph
      let type = self.readingOptions[self.chosenReading - 1];
      let val = randomScalingFactor();
      var d = new Date();
      self.mockData.unshift(new Reading(0, d, type.id, type.name, val, type.unit));
      self.addData(lineChart, d.toLocaleTimeString(), val);
    }, 1000);
  }

  // runs when page is closed
  OnDestroy() {
    // clear the interval
    clearInterval(this.myInterval);
  }

  // clears the graph for when a different real-time measurement is selected
  clearData(chart) {
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
      dataset.data = [];
    })
    chart.update();
  }

  // adds new data to the graphs and calls update
  addData(chart, label, data) {
    if (chart.data.labels.length > 20) {
      chart.data.labels.shift();
    }

    chart.data.labels.push(label);

    chart.data.datasets.forEach((dataset) => {
      if (dataset.data.length > 20) {
        dataset.data.shift();
      }
      dataset.data.push(data);
    });

    chart.update();
  }

}
