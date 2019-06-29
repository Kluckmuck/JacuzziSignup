import { Component } from '@angular/core';
import { Signup } from '../signup';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  
  constructor() { }

  model = new Signup("", "", new Date("1994-03-06"));
  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
