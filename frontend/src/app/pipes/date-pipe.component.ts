import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  template: `{{today | date:'d'}}/{{today | date:'M'}}/{{today | date:'y'}}`
})
export class DatePipeComponent {
  today: number = Date.now();
}
