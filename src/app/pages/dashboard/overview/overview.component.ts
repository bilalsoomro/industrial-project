import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  title = 'app';
  pieconfig = {};
  lineconfig = {};
  barconfig = {};

  randomScalingFactor() {
    return Math.round(Math.random() * 100);
  };

  constructor() {
    let self = this;
    
    self.pieconfig = {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            self.randomScalingFactor(),
            self.randomScalingFactor(),
            self.randomScalingFactor(),
            self.randomScalingFactor(),
            self.randomScalingFactor(),
          ],
          backgroundColor: [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
          ],
          label: 'Dataset 1'
        }],
        labels: [
          "Red",
          "Orange",
          "Yellow",
          "Green",
          "Blue"
        ]
      },
      options: {
        responsive: true
      }
    };

    self.lineconfig = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'red',
            borderColor: 'red',
            data: [
              self.randomScalingFactor(),
              self.randomScalingFactor(),
              self.randomScalingFactor(),
              self.randomScalingFactor(),
              self.randomScalingFactor(),
              self.randomScalingFactor(),
              self.randomScalingFactor()
            ],
            fill: false,
        }]
      },
      options: {
        responsive: true,
        title:{
            display:true,
            text:'Some meter reading'
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
                    labelString: 'Month'
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

    self.barconfig = {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: 'yelllow',
            borderColor: 'red',
            borderWidth: 1,
            data: [
                self.randomScalingFactor(),
                self.randomScalingFactor(),
                self.randomScalingFactor(),
                self.randomScalingFactor(),
                self.randomScalingFactor(),
                self.randomScalingFactor(),
                self.randomScalingFactor()
            ]
        }]
      },
      options: {
          responsive: true,
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Another reading'
          }
      }
    }
   }

  ngOnInit() {
    var self = this;
    
    const pie = <HTMLCanvasElement> document.getElementById("pie-chart");
    let piectx = pie.getContext("2d");
    //window.myPie = new Chart(ctx, config);
    new Chart(piectx, self.pieconfig);

    const line = <HTMLCanvasElement> document.getElementById("line-chart");
    let linectx = line.getContext("2d");
    new Chart(linectx, self.lineconfig);

    const bar = <HTMLCanvasElement> document.getElementById("bar-chart");
    let barctx = bar.getContext("2d");
    new Chart(barctx, self.barconfig);
  }

}
