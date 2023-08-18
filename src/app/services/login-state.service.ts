import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {

  isUserLogin: boolean = false

  constructor() { }


  setUserLogin(value: boolean) {
    this.isUserLogin = value
  }

  getIsUserLogin(): boolean {
    return this.isUserLogin
  }
}
