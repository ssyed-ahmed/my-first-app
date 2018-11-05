import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username = '';

  isUserNameDisabled = true;

  displayPassword = false;

  displayClicks = [];

  onResetUsername() {
    this.username = '';
    this.onUsernameInput();
  }

  onUsernameInput() {
    if (this.username === '') {
      this.isUserNameDisabled = true;
    } else {
      this.isUserNameDisabled = false;
    }
  }

  togglePasswordDisplay() {
    this.displayPassword = !this.displayPassword;
    this.displayClicks.push(new Date());
  }
}
