import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginStateService } from 'src/app/services/login-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLogin: { email: string, password: string } | null | undefined


  constructor(private _fb: FormBuilder, private _router: Router, private _loginServie: LoginStateService) { }


  authenticatoinForm: FormGroup = this._fb.group({
    email: [''],
    password: ['']
  })

  login() {
    this.userLogin = { email: this.email?.value, password: this.password?.value }
    localStorage.setItem('userLogin', JSON.stringify(this.userLogin))
    this._router.navigate(['/'])
  }

  get email() {
    return this.authenticatoinForm.get('email');
  }
  get password() {
    return this.authenticatoinForm.get('password');
  }



  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.


  }

}
