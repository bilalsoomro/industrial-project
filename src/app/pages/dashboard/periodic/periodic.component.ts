import { Component, OnInit } from '@angular/core';
import { PERIODIC_READINGS_LIST } from '../../../providers/mock-data';

@Component({
  selector: 'app-periodic',
  templateUrl: './periodic.component.html',
  styleUrls: ['./periodic.component.css']
})
export class PeriodicComponent implements OnInit {

  readingOptions: any = PERIODIC_READINGS_LIST;
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
