import { Injectable } from '@angular/core';
import { b } from '@angular/core/src/render3';
import { userInfo } from 'os';

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
