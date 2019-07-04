import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Signup } from '../signup';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faHotTub } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  
  constructor(private date: DatePipe) { }

  model = new Signup("", "", new Date(""));
  submitted = false;
  formattedDate: any;

  onSubmit() { 
    this.formattedDate = this.date.transform(this.model.birthday, "yyyy-MM-dd")
    this.submitted = true;
   }

  faCoffee = faCoffee;
  faEnvelope = faEnvelope;
  faCalendarDay = faCalendarDay;
  faHotTub = faHotTub;
}
