import { Component, OnInit } from '@angular/core';
import { REALTIME_READINGS_LIST } from '../../../providers/mock-data';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css']
})
export class RealTimeComponent implements OnInit {

  readingOptions: any = REALTIME_READINGS_LIST;
  startDate: Date = new Date();
  endDate: Date = new Date();
  chosenReading: any = 'Choose...';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('reading chosen: ', this.chosenReading);
    console.log("start Date: ", this.startDate);
    console.log("end Date: ", this.endDate);
  }

}
