import { Component, OnInit, Input } from '@angular/core';
import { Signup } from '../signup';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent {

  constructor(private signupService: SignupService) { }

  @Input() name: string;
  @Input() email: string;
  @Input() birthday: Date;

  submitted = false;
  checkbox: boolean = false;

  postForm() {
    console.log(this.name, this.email, this.birthday)
    this.signupService.postSignup(new Signup(this.name, this.email, this.birthday)).subscribe();
    this.submitted = true;
  }

}
