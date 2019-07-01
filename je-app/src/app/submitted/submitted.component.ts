import { Component, OnInit, Input } from '@angular/core';
import { Signup } from '../signup';
import { SignupService } from '../signup.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {

  constructor(private signupService:SignupService,
    private date: DatePipe) { }

  @Input() name: string;
  @Input() email: string;
  @Input() birthday: Date;

  formattedDate: any;

  checkbox :boolean = false;
  ngOnInit() {
  this.formattedDate = this.date.transform(this.birthday, "yyyy-MM-dd")
  }

  postForm(){
    console.log(this.name, this.email,this.formattedDate)
    this.signupService.postSignup(new Signup(this.name,this.email,this.formattedDate)).subscribe();
  }

}
