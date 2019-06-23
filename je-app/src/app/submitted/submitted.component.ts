import { Component, OnInit, Input } from '@angular/core';
import { Signup } from '../signup';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Input() email: string;
  @Input() birthday: string;


  ngOnInit() {
  }

}
