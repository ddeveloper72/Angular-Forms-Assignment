import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subServices = ['Basic', 'Advanced', 'Pro'];
  defaultService = 'Advanced';

  @ViewChild('subscriptionForm', { static: false })
  signupForm: NgForm;

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
