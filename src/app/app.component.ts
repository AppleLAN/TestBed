import { Component } from '@angular/core';
import { AppComponentService } from './app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-bed';

  constructor(private appComponentService: AppComponentService) {}

  numberAddition(number1, number2) {
    return number1 + number2;
  }

  multiplyNumbersFromComponent(number1, number2) {
    return this.appComponentService.multiplyNumbers(number1, number2);
  }

  getUserDataFromComponent() {
    return this.appComponentService.getUserData().user;
  }
}
