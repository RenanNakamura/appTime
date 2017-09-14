import { Component } from '@angular/core';
import { Time } from './time.model';
import { TimeService } from './time.service';

@Component({
  selector: 'time-now',
  template: '<p><em>{{time.hours}}</em></p>'
})

export class TimeComponent {

  time: Time;

  constructor(timeService: TimeService) {
    timeService.getHours(1000, time => this.time = time);
  }

}
