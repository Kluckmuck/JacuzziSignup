import { Component, OnInit, Input } from '@angular/core';
import { Signup } from '../signup';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {

  constructor(private signupService:SignupService) { }

  @Input() name: string;
  @Input() email: string;
  @Input() birthday: Date;

  checkbox :boolean = false;
  ngOnInit() {
  }

  postForm(){
    console.log(this.name, this.email,this.birthday)
    this.signupService.postSignup(new Signup(this.name,this.email,this.birthday)).subscribe();
  }

}
