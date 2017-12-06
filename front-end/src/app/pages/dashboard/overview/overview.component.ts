// import angular API
import { Component, OnInit } from '@angular/core';

// import chart functionalitu
import * as Chart from 'chart.js';

// import various required functions and mock data to generate dummy data
import {
  Reading, OVERVIEW_READINGS_LIST,
  randomScalingFactor, randomDate, getRandomColor, getRandomInt
} from '../../../providers/mock-data';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  title = 'app';
  readingOptions: any[] = OVERVIEW_READINGS_LIST;
  mockData: Reading[] = [];

  // lineconfig contains the config for the line graph in the overview page
  lineconfig = {
    type: 'line',
    data: {
      labels: [],
      datasets: []
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Sensire meter readings overview'
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
            labelString: 'Timestamp'
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

  // generates a random number between 1 and 100
  randomScalingFactor() {
    return Math.round(Math.random() * 100);
  };

  constructor() {
  }

  // this function runs when this overview page starts
  ngOnInit() {
    var self = this;


    // generate dummy data for the various measurements of this overview page
    for (let j = 0; j < self.readingOptions.length; j++) {
      let type = self.readingOptions[j];

      let color = getRandomColor();

      self.lineconfig.data.datasets[j] = {
        label: type.name,
        backgroundColor: color,
        borderColor: color,
        data: [],
        fill: false,
      };

      for (let i = 0; i < 20; i++) {
        if (i == 0) {
          let d = randomDate(new Date(2017, 0, 1), new Date());
          self.lineconfig.data.labels.push(d.toLocaleString());
        }
        self.lineconfig.data.datasets[j].data.push(randomScalingFactor());
      }
    }

    // initialize chart based on config and dummy data
    const line = <HTMLCanvasElement>document.getElementById("overview-line-chart");
    let linectx = line.getContext("2d");
    new Chart(linectx, self.lineconfig);

  }

}