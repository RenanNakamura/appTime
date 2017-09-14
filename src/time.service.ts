import { Time } from './time.model';

export class TimeService {

  private time: Time;

  private getTime(): Time {    
    let date = new Date(); 
    this.time = {hours: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()};
    return this.time;     
  }

  getHours(delay: number, callback: (time: Time) => void) {
    callback(this.getTime());
    setInterval(() => callback(this.getTime()), delay);
  }

}
