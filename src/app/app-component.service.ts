import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  constructor() { }

  multiplyNumbers(number1, number2) {
    return number1 * number2;
  }

  getUserData() {
    return {user: 'hello'};
  }
}
